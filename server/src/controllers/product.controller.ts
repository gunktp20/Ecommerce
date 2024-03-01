import { Request, Response } from "express";
import { Product } from "../models/Product";
import mongoose from "mongoose";

const getAllProduct = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getProductById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.status(400).json({ msg: "Please provide product id!" });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ msg: "Please provide a valid product id" });
  }

  const products = await Product.findById(req.params.id);
  if (!products) {
    return res
      .status(404)
      .json({ msg: `Not found your product with id ${req.params.id}` });
  }
  res.status(200).json(products);
};

export { getAllProduct, getProductById };
