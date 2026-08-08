import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditGame = () => {
  const [title, setTitle] = useState("");
  const [developer, setDeveloper] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/games/${id}`).then((response) => {
      const game = response.data.data;
      setTitle(game.title);
      setDeveloper(game.developer);
      setReleaseYear(game.releaseYear);
    });
  }, [id]);

  const handleUpdateGame = () => {
    setLoading(true);
    const data = { title, developer, releaseYear };
    axios
      .put(`http://localhost:3000/games/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("An error occurred! Please check the console.");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold my-6 text-gray-800 neo-inset px-6 py-3 inline-block">
        🔄 Update Game
      </h1>
      {loading && <Spinner />}
      <div className="neo-card mt-4">
        <div className="mb-5">
          <label className="block text-gray-600 font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="neo-inset w-full px-4 py-3 outline-none text-gray-800"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-600 font-medium mb-2">
            Developer
          </label>
          <input
            type="text"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            className="neo-inset w-full px-4 py-3 outline-none text-gray-800"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Release Year
          </label>
          <input
            type="text"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className="neo-inset w-full px-4 py-3 outline-none text-gray-800"
          />
        </div>

        <button
          onClick={handleUpdateGame}
          className="neo-button-gradient w-full py-3.5 font-bold text-lg shadow-lg hover:shadow-xl"
        >
          🔄 Update Game
        </button>
      </div>
    </div>
  );
};

export default EditGame;
