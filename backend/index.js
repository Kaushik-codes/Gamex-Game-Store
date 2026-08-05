import express from "express";
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import { Game } from "./models/gameModel.js";
import GamesRouter from "./routes/GamesRoutes.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());
// Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors(*) ---
// app.use(cors());
// Option 2: Allow custom origins ---
/*
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type'],
  }),
);
*/

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to Gamex Game Store");
});

app.use("/games", GamesRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("App connected successfully to database");
    app.listen(PORT, () => {
      console.log(`Server connected to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
