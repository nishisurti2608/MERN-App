import express, { application } from "express";
import colors from "colors";
import dotenv from "dotenv";
//rest object
const app = express();

//config env

dotenv.config();

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
