import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import GamesTable from "../components/Home/GamesTable";
import GamesCard from "../components/Home/GamesCard";

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        setGames(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-3">
          <button
            className={`neo-button px-6 py-2.5 font-medium ${showType === "table" ? "text-blue-600 shadow-inner border-2 border-blue-400" : "text-gray-700"}`}
            onClick={() => setShowType("table")}
          >
            Table View
          </button>

          <button
            className={`neo-button px-6 py-2.5 font-medium ${showType === "card" ? "text-blue-600 shadow-inner border-2 border-blue-400" : "text-gray-700"}`}
            onClick={() => setShowType("card")}
          >
            Card View
          </button>
        </div>
        <Link to="/games/create">
          <div className="neo-button-gradient px-6 py-3 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl">
            <MdOutlineAddBox className="text-2xl" />
            Add Game
          </div>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 neo-inset px-6 py-3 inline-block">
        🎮 Games Collection
      </h1>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <GamesTable games={games} />
      ) : (
        <GamesCard games={games} />
      )}
    </div>
  );
};

export default Home;
