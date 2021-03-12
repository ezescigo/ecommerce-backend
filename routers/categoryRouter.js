import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';

import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import dbErrorHandler from '../helpers/dbErrorHandler.js';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;
const categoryRouter = express.Router();

// Admin Category Create
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
// Get all Categories.
// /api/category
categoryRouter.get('/', expressAsyncHandler(async (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';

  try {
    req.categories = await Category.find({})
      .sort([[sortBy, order]])
    res.send(req.categories);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    })
  }

}));

//////////////////////////////////////////////////////////////
// Seed
// categoryRouter.get('/seed',
//   expressAsyncHandler(async (req, res) => {
//     // await User.remove({});
//     const createdCategories = await Category.insertMany(data.categories);
//     res.send({ createdCategories });
//   }));

export default categoryRouter;