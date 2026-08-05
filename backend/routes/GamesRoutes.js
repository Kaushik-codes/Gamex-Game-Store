import express from "express";
import { Game } from "../models/gameModel.js";

const router = express.Router();

// Create a new game
router.post("/", async (req, res) => {
  try {
    const { title, developer, releaseYear } = req.body;
    if (!title || !developer || !releaseYear) {
      return res.status(400).json({ message: "Send all required fields: title, developer, release year" });
    }

    const newGame = new Game({ title, developer, releaseYear });
    await newGame.save();

    res.status(201).json({ message: "Game saved successfully", data: newGame });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Get all games
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json({ count: games.length, data: games });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Get one game by id
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Game not found." });
    res.status(200).json({ data: game });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Update a game
router.put("/:id", async (req, res) => {
  try {
    const { title, developer, releaseYear } = req.body;
    if (!title || !developer || !releaseYear) {
      return res.status(400).json({ message: "Send all required fields: title, developer, release year" });
    }

    const result = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) return res.status(404).json({ message: "Game not found." });

    res.status(200).json({ message: "Game successfully updated", data: result });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Delete a game
router.delete("/:id", async (req, res) => {
  try {
    const result = await Game.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Game not found." });
    res.status(200).json({ message: "Game deleted successfully", data: result });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

export default router;
