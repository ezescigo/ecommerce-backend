import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';
import { errorHandler } from '../helpers/dbErrorHandler.js';

export const ProductList = async (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? req.query.limit : 6;

  try {
    const products = await Product.find({})
      .populate('categoryIds')
      .sort([[sortBy, order]])
      .limit(limit)
      .exec();
    res.send(products);
  } catch (err) {
    next(err);
    // return res.status(500).send({
    //   message: err.message
  }
}
