import { Request, Response } from "express";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

const getAllCart = async (req: Request, res: Response) => {
  const carts = await Cart.find();
  res.status(StatusCodes.OK).json(carts);
};

const getAllCartByEmail = async (req: Request, res: Response) => {
  const emailExists = await Cart.find({ email: req.params.email });
  if (emailExists.length <= 0) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "Not Found your Email" });
  }
  const carts = await Cart.find({ email: req.params.email });
  res.status(StatusCodes.OK).json(carts);
};
const insertCart = async (req: Request, res: Response) => {
  const { productID, email, quantity } = req.body;
  if (!productID || !email || !quantity) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all value!" });
  }
  if (!mongoose.isValidObjectId(productID)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Product ID is not valid!" });
  }
  const product = await Product.findById(productID);

  if (!product) {
    console.log("product", product);
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Not found your product with ID " + productID });
  }
  const productIsAlreadyInCart = await Cart.findOne({ product: productID });
  if (productIsAlreadyInCart) {
    const cart = await Cart.findOneAndUpdate(
      { product: productID },
      {
        quantity: productIsAlreadyInCart.quantity + quantity,
        totalPrice:
          (productIsAlreadyInCart.quantity + quantity) * product.price,
      }
    );
    return res.status(StatusCodes.OK).json({
      //@ts-ignore
      ...cart?._doc,
      quantity: productIsAlreadyInCart.quantity + quantity,
      totalPrice: (productIsAlreadyInCart.quantity + quantity) * product.price,
    });
  }
  const cart = await Cart.create({
    product: productID,
    email: email,
    quantity: quantity,
    pricePerUnit: product.price,
    totalPrice: product.price * quantity,
  });
  res.status(StatusCodes.OK).json(cart);
};

export { insertCart, getAllCart, getAllCartByEmail };
