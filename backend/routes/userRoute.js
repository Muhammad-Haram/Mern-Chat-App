import express from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();

router.route("/register", register);

export default router;
