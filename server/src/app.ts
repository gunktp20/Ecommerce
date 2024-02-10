import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ msg: "Welcome to our API" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
