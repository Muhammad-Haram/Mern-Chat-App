import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.route("/send/:id").post(isAuth, sendMessage);
router.route("/:id").get(isAuth, getMessage);

export default router;