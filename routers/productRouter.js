import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import data from '../data.js';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import ProductList from '../controllers/productController.js';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

const productRouter = express.Router();

productRouter.get('/preview', expressAsyncHandler(async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 5;
  let sortBy = req.query.sortBy ? req.query.sortBy : { price: -1 }; // later: add sold param to items and sort by most sold.

  try {
    const products = await Product.find({})
      .sort(sortBy)
      .populate('categoryIds', '_id name')
      .limit(limit)
    res.send(products);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
      comment: ' in Product.find'
    })
  }
}));


//  Products by number of sell or by creation/arrival date
//  /products?sortBy=sold&order=desc&limit=4
//  /products?sortBy=createdAt&order=desc&limit=4
//  if no query params are sent, then 10 Products are returned. => <<<< Will change to a few of each categories. >>>>
// http://localhost:5600/api/products/beers/accesories?&limit=2&params=...

productRouter.get('/:category/:subcategory?', expressAsyncHandler(async (req, res) => {
  const limit = req.query.limit;
  // add more useful params for pagination
  const subcategory = req.params.subcategory;
  let category = '';

  // (typeof subcategory === 'undefined')
  //   ? category = req.params.category
  //   : subcategory === ''
  //     ? null
  //     : category = subcategory

  category = subcategory || req.params.category;

  console.log('category: ', category);
  console.log('sub: ', subcategory);
  console.log('limit', limit);

  try {
    req.category = await Category.findOne({ slug: category })
  } catch (err) {
    return res.status(500).send({
      message: err.message,
      comment: ' in Category.findOne'
    })
  }

  try {
    let products = await Product.find({ categoryIds: ObjectId(req.category.id) });
    res.send(products);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({
      message: err.message,
      comment: ' in Product.find'
    })
  }

}));

///////////////////////////////////////////////////////////////////////////////////
// Product finder based on the requested product's category.
// Will return any Product that shares at least one category with Product queried.
// /api/products/related/{product-id}

productRouter.get('/related/:productId', expressAsyncHandler(async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 10;
  // let categories = [ObjectId(req.params.id), '604676094750f24af0cbda16'];
  // console.log(categories);

  try {
    let product = await Product.findById(req.params.productId);
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






// Seed
// productRouter.get('/seed',
//   expressAsyncHandler(async (req, res) => {
//     // await Product.remove({});
//     const createdProducts = await Product.insertMany(data.products);
//     res.send({ createdProducts });
//   }));

// Get Product details by id
// /api/products/{product-id}
productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found.' });
  }
}));

///////////////////// QUERY ////////////////////////////////////////////
// /api/products?category={category-name}&subcategory={subcategory-name}

// productRouter.get('/', expressAsyncHandler(async (req, res) => {
//   let limit = req.query.limit ? parseInt(req.query.limit) : 6;
//   let order = req.query.order ? req.query.order : 'asc';
//   let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
//   let category = req.query.category;
//   let subcategory = req.query.subcategory;

//   const categoryFilter = category ? { category } : {};

//   if (category === 'undefined') {
//     category = ''
//   }
//   // .distinct('categoryIds');
//   try {
//     const categories = await Product.findOne({ 'wines' })
//     const promises = await Promise.all(categories.map(async category => Product.find({ categoryIds: ObjectId(category.id) })))
//     console.log(promises);
//   } catch (err) {
//     return res.status(500).send({
//       message: err.message,
//       comment: ' in Category.findOne'
//     })
//   }
//   try {
//     // const products = await Product.find({ categoryIds: ObjectId(req.category.id) })
//     // .limit(limit);
//     // res.send(products);
//   } catch (err) {
//     return res.status(500).send({
//       message: err.message,
//       comment: ' in Product.find'
//     })
//   }

// subcategory !== 'undefined'
//   ? category = subcategory
//   : null


// if (category !== 'undefined') {
//   try {
//     req.category = await Category.findOne({ slug: category })
//   } catch (err) {
//     return res.status(500).send({
//       message: err.message,
//       comment: ' in Category.findOne'
//     })
//   }

//   try {
//     const products = await Product.find({ categoryIds: ObjectId(req.category.id) })
//       .limit(limit)
//       .populate('categoryIds', '_id name slug')
//       .sort([[sortBy, order]])
//     res.send(products);
//   } catch (err) {
//     return res.status(500).send({
//       message: err.message,
//       comment: ' in Product.find'
//     })
//   }
// } else {
//   try {
//     const products = await Product.find({})
//       .limit(limit)
//       .populate('categoryIds', '_id name slug')
//       .sort([[sortBy, order]])
//     res.send(products);
//   } catch (err) {
//     return res.status(500).send({
//       message: err.message
//     })
//   }
// }



// }))

export default productRouter;