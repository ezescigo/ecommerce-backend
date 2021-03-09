import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    brand: { type: String, required: true },
    categoryIds: [{ type: ObjectId, ref: 'Category', required: true }],
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    size: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;