import express from "express";
import { signup, login, logout, getUsers } from "../controllers/user_controller.js";
import secureRoute from "../middleware/secure_route.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/getUsers", secureRoute, getUsers);

export default router;