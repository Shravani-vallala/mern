import express from "express";
import { ChatController } from "../controller/ChatController.js";

const router = express.Router();
router.get("/", (req, res) => {
  
  res.send("Chat API is running ✅");
});
// POST /api/chat
console.log(router);
router.post("/", ChatController);

export default router;
