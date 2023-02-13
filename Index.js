import express, { urlencoded } from "express";
import connection from "./Database/db.js";
import Route from "./routes/route.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config()
const app = express()

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Route);


connection()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running on port :${PORT}`))

// "start": "nodemon --experimental-modules --es-module-specifier-resolution=node Index.js"