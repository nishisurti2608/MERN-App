import express, { application } from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//rest object
const app = express();

//config env

dotenv.config();

//dB Config

connectDB();

//middleware

app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/auth", authRoutes);
//rest api

app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

//Port

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} On ${PORT}`.bgGreen.white
  );
});
