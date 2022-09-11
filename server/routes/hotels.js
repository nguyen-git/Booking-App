import express from "express";

const router = express.Router();
import {createHotel, updateHotel, deleteHotel, getAllHotels, getHotel, countByCity, countByType, getAllHotelRooms} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verify.js";

// create hotel
router.post("/", verifyAdmin, createHotel);

// update hotel
router.put("/:id", verifyAdmin, updateHotel);

// delete hotel
router.delete("/find/:id", verifyAdmin, deleteHotel);

// get hotel
router.get("/find/:id", getHotel);

// get all hotel
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getAllHotelRooms);
export default router;
