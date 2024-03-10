import cors from "cors";
import express, { NextFunction } from "express";
import connectDB from "./db/connect";
import dotenv from "dotenv";
import "express-async-errors";
import productRoute from "./routes/product.route";
import cartRoute from "./routes/cart.route";
dotenv.config();
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  console.log("------------------------");
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRoute);
app.use("/cart", cartRoute);

const startServer = async () => {
  try {
    await connectDB(MONGO_URL as string);
    app.listen(PORT, () => {
      console.log(`server is running on port : ${PORT}`);
    });
  } catch (err: any) {
    console.log(err);
  }
};

startServer();
