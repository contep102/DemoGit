import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { get } from "mongoose";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// update new user
router.put("/:id", verifyUser, updateUser);

// delete new user
router.delete("/:id", verifyUser, deleteUser);

// get single new user
router.get("/:id", verifyUser, getSingleUser);

// get all user
router.get("/", verifyAdmin, getAllUser);

export default router;
