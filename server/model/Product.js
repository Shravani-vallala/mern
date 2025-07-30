import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
