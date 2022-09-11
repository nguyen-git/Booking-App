import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./connection/connection.js";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";
import hotelRoute from "./routes/hotels.js";

const app = express();
const PORT = 6102

dotenv.config();

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());



app.use("/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/room", roomRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})