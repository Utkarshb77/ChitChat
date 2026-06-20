import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import secureRoute from "../middleware/secure_route.js";

const router = express.Router();

router.post("/send/:id", secureRoute, sendMessage);
router.get("/get/:id", secureRoute, getMessages);

export default router;  