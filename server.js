import express, { application } from "express";
import colors from "colors";

//rest object
const app = express();

//rest api

app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

//Port

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`.bgGreen.white);
});
