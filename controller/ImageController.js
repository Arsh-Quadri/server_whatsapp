import grid from "gridfs-stream";
import mongoose from "mongoose";
const BASE_URL = process.env.BASE_URL;


const conn = mongoose.connection;
var gfs, gridFsBucket;
conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "fs"
    });
    gfs = grid(conn.db, mongoose.mongo);
    // gfs.connection('fs');
})

export const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(404).json("File not found")
    }

    const imageUrl = `${BASE_URL}/file/${req.file.filename}`;
    return res.status(200).json(imageUrl)
}

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}