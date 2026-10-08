const dotenv = require("dotenv");
dotenv.config(); // dotenv sub se pehle run hona chahiye!

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const ProductRouter = require("./Routes/ProductRouter");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const productRoutes = require("./Routes/ProductRouter");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "E-Commerce Backend is Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});