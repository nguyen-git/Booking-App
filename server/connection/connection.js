import mongoose from "mongoose";

const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.agofmrp.mongodb.net/booking-app?retryWrites=true&w=majority`

    try {
        mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }, console.log("mongoose DB connect success"))
    } catch (error) {
        console.log("Error connecting to Data Base", error);
    }
}

export default Connection;