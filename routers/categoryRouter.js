import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';

import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import dbErrorHandler from '../helpers/dbErrorHandler.js';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;
const categoryRouter = express.Router();

// Category Create
categoryRouter.post('/category/create', (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: dbErrorHandler(err)
      });
    }
    res.json({ data });
  })
});

///////////////////////////////////////////////

categoryRouter.get('/', expressAsyncHandler(async (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';

  try {
    const categories = await Category.find({})
      .sort([[sortBy, order]])
    res.send(categories);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    })
  }
}));

/////////////////////////////////////////////////////////////////
// Get all Products for certain Category by ID.

categoryRouter.get('/:slug', expressAsyncHandler(async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  try {
    req.category = await Category.findOne({ slug: req.params.slug })
  } catch (err) {
    return res.status(500).send({
      message: err.message
    })
  }

  try {
    const products = await Product.find({ categoryIds: ObjectId(req.category.id) })
      .limit(limit)
      .populate('categoryIds', '_id name slug')
    res.send(products);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    })
  }
}))

//////////////////////////////////////////////////////////////

categoryRouter.get('/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdCategories = await Category.insertMany(data.categories);
    res.send({ createdCategories });
  }));

export default categoryRouter;