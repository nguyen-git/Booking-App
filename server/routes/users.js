import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import {verifyUser, verifyAdmin} from "../utils/verify.js";

const router = express.Router();

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

// get user
router.get("/:id", verifyUser, getUser);

// get all user
router.get("/", verifyAdmin, getAllUsers);

export default router