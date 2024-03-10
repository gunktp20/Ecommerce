import express from "express";
import {
    insertCart,
    getAllCart,
    getAllCartByEmail
} from "../controllers/cart.controller";
const router = express.Router();


router.route("/").get(getAllCart);
router.route("/:email").get(getAllCartByEmail);
router.route("/").post(insertCart);

export default router;
