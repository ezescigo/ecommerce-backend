import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
  {

    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },

    slug: {
      type: String,
      required: true
    },

    parentId: {
      type: ObjectId,
      ref: 'Category',
    },

    idPath: { type: String },
  },
  {
    timestamps: true,
    // _id: false
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;