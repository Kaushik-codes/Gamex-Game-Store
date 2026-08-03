import mongoose from "mongoose";

const gameSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Game = mongoose.model('Game',gameSchema);
