import mongoose , { Schema , model } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
const cartSchema = new Schema(
  {
    product: { type: ObjectId, ref: "products" },
    email: { type: String, required: true },
    quantity: {
      type: String,
      required: true,
    },
    pricePerUnit: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Cart = model("carts", cartSchema);
