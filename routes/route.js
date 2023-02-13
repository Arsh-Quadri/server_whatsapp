import express from "express";
import { adduser } from "../controller/userController.js";
import { getuser } from "../controller/userController.js";
import { newConversation, getConversation } from "../controller/conversationContraller.js";
import { newMessage, getMessage } from "../controller/messageController.js";
import { getImage, uploadFile } from "../controller/ImageController.js";
import upload from "../utils/upload";

const route = express.Router()

route.post("/add", adduser)
route.get("/users", getuser)
route.post("/conversation/add", newConversation)
route.post("/conversation/get", getConversation)
route.post("/message/add", newMessage)
route.get("/message/get/:id", getMessage)
route.post("/file/upload", upload.single("file"), uploadFile)
route.get("/file/:filename", getImage)

export default route