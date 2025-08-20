import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chatRoutes.js";

const app = express();
app.get("/", (req, res) => {
  res.send("✅ API server is running");
});

// ✅ Allow frontend (localhost:3000) to call backend (localhost:8000)
app.use(cors({
  origin: "http://localhost:3000",  // frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());


// Routes
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
