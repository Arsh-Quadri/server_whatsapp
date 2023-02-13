import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const DB_URL = process.env.DB_URL;

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

const connection = async () => {
    // URL = `mongodb://${USERNAME}:${PASSWORD}@ac-l6gvpdf-shard-00-00.e7rh5tg.mongodb.net:27017,ac-l6gvpdf-shard-00-01.e7rh5tg.mongodb.net:27017,ac-l6gvpdf-shard-00-02.e7rh5tg.mongodb.net:27017/?ssl=true&replicaSet=atlas-r93lbd-shard-0&authSource=admin&retryWrites=true&w=majority`
    // URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.e7rh5tg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(DB_URL, { useunifiedTopology: true })
        console.log("connected to mongo successfully")
    } catch (error) {
        console.log("error in connection with database:", error.message)
    }
}

export default connection;