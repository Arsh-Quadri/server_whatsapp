import multer from "multer";
import pkg from 'multer-gridfs-storage'
import dotenv from "dotenv";

dotenv.config()
const { GridFsStorage } = pkg;
const DB_URL = process.env.DB_URL;
// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;


const storage = new GridFsStorage({
    // url: `mongodb://${USERNAME}:${PASSWORD}@ac-l6gvpdf-shard-00-00.e7rh5tg.mongodb.net:27017,ac-l6gvpdf-shard-00-01.e7rh5tg.mongodb.net:27017,ac-l6gvpdf-shard-00-02.e7rh5tg.mongodb.net:27017/?ssl=true&replicaSet=atlas-r93lbd-shard-0&authSource=admin&retryWrites=true&w=majority`,
    url: DB_URL,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {
        // const match = ["image/png", "image/jpg", "image/jpeg"];
        // if (match.indexOf(file.mimeType) === -1)
        if (file.mimeType === "image/jpg" || "image/png" || "image/jpeg") {
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({ storage });