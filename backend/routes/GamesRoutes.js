import express from "express";
import { Game } from "../models/gameModel.js";

const router = express.Router();

// Route to save a new game
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    
    if (!req.body.title || !req.body.developer || !req.body.releaseYear) {
      return res.status(400).send({
        message: "Send all required fields: title, developer, release year",
      });
    }

    const newGame = new Game({
      title: req.body.title,
      developer: req.body.developer,
      releaseYear: req.body.releaseYear,
    });

    await newGame.save();
    res.status(201).json({ message: "Game saved successfully", game: newGame });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route to get all games from the database
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    return res.status(201).json({
      count: games.length,
      data: games,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

// Route to get one game from database by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id; // const { id } = req.params;
    const game = await Game.findById(id);
    if (!game) {
      return res.status(404).json({ message: "Game not found." });
    }
    return res.status(201).json({
      game,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

// Route to update a game
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.developer || !req.body.releaseYear) {
      return res.status(400).send({
        message: "Send all required fields: title, developer, release year",
      });
    }

    const { id } = req.params;
    const updatedData = req.body;
    const result = await Game.findByIdAndUpdate(id, updatedData);
    if (!result) {
      return res.status(404).json({ message: "Game not found." });
    }
    return res
      .status(200)
      .json({ message: "Game successfully updated", game: result });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

// Route to delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Game.findByIdAndDelete(id);
    if(!result){
      return res.status(404).json({message:"Game not found."});
    }
    return res.status(200).json({message:"Game deleted successfully",game:result});
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

export default router;