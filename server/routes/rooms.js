import express from "express";
import { createRoom,updateRoom, deleteRoom, getRoom, getAllRooms } from "../controllers/room.js";
import {verifyUser, verifyAdmin} from "../utils/verify.js";

const router = express.Router();

// create room
router.post("/:hotelid", verifyAdmin, createRoom)

// update room
router.put("/:id", verifyUser, updateRoom);

// delete room
router.delete("/:id/:hotelid", verifyUser, deleteRoom);

// get room
router.get("/:id", verifyUser, getRoom);

// get all room
router.get("/", verifyAdmin, getAllRooms);

export default router