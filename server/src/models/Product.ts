// import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import { ProductDocument } from "../types/";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically create createdAt timestamp
  }
);

/**
 * Use Bcrypt to check that an entered password matches the password of a user
 * @param enteredPassword The password that a user enters
 */

// productSchema.methods.matchPassword = async function (
//   this: any,
//   enteredPassword: string
// ) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

/**
 * Runs before the model saves and hecks to see if password has been
 * modified and hashes the password before saving to database
 */

// productSchema.pre("save", async function (this: UserDocument, next) {
//   if (!this.isModified("password")) next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

export const Product = model<ProductDocument>("products", productSchema);
