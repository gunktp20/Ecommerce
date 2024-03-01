import express from "express";
import {
  deleteProduct,
  getAllProduct,
  getProductById,
  insertProduct,
  updateProduct,
} from "../controllers/product.controller";
const router = express.Router();

router.route("/").get(getAllProduct);
router.route("/:id").get(getProductById);
router.route("/").post(insertProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:id").put(updateProduct);

export default router;
