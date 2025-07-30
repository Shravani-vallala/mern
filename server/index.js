import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import productRoutes from "./routes/productRoutes.js"; // ✅ import routes
import authRoutes  from "./routes/authRoutes.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


// ✅ Basic route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the MERN backend!");
});

// ✅ Use product routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

if (!MONGOURL) {
  console.error("❌ MONGO_URL is not defined in .env");
  process.exit(1);
}

mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ DB connection failed:", error);
  });
