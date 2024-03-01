import { Model, Document } from "mongoose";

export interface Cart {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartDocument extends Cart, Document {
  matchPassword: (password: string) => Promise<Boolean>;
}

export interface CartModel extends Model<CartDocument> {}
