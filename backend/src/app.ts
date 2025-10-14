import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "dotenv";
env.config();
// import authRoutes from "./routes/auth.routes";
// import productRoutes from "./routes/product.routes";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
})
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);

export default app;
