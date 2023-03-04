import express from "express";
//import all controllers of users
import {
  createUser,
  getAllUsers,
  getUserInfoById,
  loginUser,
  signupUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoById);
router.route("/login").post(loginUser);
router.route("/signup").post(signupUser);

export default router;
