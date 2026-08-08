import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowGame = () => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/games/${id}`)
      .then((response) => {
        setGame(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold my-6 text-gray-800 neo-inset px-6 py-3 inline-block">📋 Game Details</h1>
      {loading ? <Spinner /> : (
        <div className="neo-card mt-4 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-300/50 pb-3">
            <span className="text-gray-500 font-medium">ID</span>
            <span className="font-mono text-gray-700">{game._id}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300/50 pb-3">
            <span className="text-gray-500 font-medium">Title</span>
            <span className="font-bold text-gray-800 text-lg">{game.title}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300/50 pb-3">
            <span className="text-gray-500 font-medium">Developer</span>
            <span className="text-gray-700">{game.developer}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300/50 pb-3">
            <span className="text-gray-500 font-medium">Release Year</span>
            <span className="px-3 py-1 neo-inset text-gray-700">{game.releaseYear}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300/50 pb-3">
            <span className="text-gray-500 font-medium">Created</span>
            <span className="text-sm text-gray-500">{new Date(game.createdAt).toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Last Updated</span>
            <span className="text-sm text-gray-500">{new Date(game.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowGame