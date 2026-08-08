import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
// import GamesCard from "../components/Home/GamesCard";
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
    <div className="p-4">
      <div className="flex justify-between items-center ">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-4 rounded-lg"
          onClick={() => {
            setShowType("table");
          }}
        >
          Table
        </button>
      </div>

      <div className="flex justify-between items-center ">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-4 rounded-lg"
          onClick={() => {
            setShowType("card");
          }}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Games List</h1>
        <Link to="/games/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? <Spinner /> : showType==='table'? (<GamesTable games={games} />) : (<GamesCard games={games}/>)}
    </div>
  );
};

export default Home;
