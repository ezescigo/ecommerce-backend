import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import data from '../data.js';
import Product from '../models/productModel.js';
import ProductList from '../controllers/productController.js';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

const productRouter = express.Router();

// by number of sell or by creation/arrival date

// /products?sortBy=sold&order=desc&limit=4
// /products?sortBy=createdAt&order=desc&limit=4
// if no params are sent, then all products are returned.

productRouter.get('/', expressAsyncHandler(async (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  try {
    const products = await Product.find({})
      .populate('categoryIds')
      .sort([[sortBy, order]])
      .limit(limit)
    res.send(products);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    })
  }
}));

///////////////////////////////////////////////////////////////////////////////////
// Product finder based on the requested product's category.
// Will return any Product that shares at least one category with Product queried.

productRouter.get('/related/:id', expressAsyncHandler(async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  // let categories = [ObjectId(req.params.id), '604676094750f24af0cbda16'];
  // console.log(categories);

  try {
    let product = await Product.findById(req.params.id);
    console.log(product);
    req.productCategories = product.categoryIds.map(s => ObjectId(s));

  } catch (err) {
    console.log(err.message);
    return res.status(500).send({
      message: err.message
    });
  };

  try {
    const products = await Product.find({ categoryIds: { $elemMatch: { $in: req.productCategories } } })
      .limit(limit)
      .populate('categoryIds', '_id name')
    res.send(products);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({
      message: err.message
    })
  }
}));



// productRouter.get('/seed',
//   expressAsyncHandler(async (req, res) => {
//     // await Product.remove({});
//     const createdProducts = await Product.insertMany(data.products);
//     res.send({ createdProducts });
//   }));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found.' });
  }
}));

export default productRouter;