import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useState } from "react";

const DeleteGame = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/games/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred! Please check the console.");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold my-6 text-gray-800 neo-inset px-6 py-3 inline-block">
        🗑️ Delete Game
      </h1>
      {loading && <Spinner />}
      <div className="neo-card text-center">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto neo-inset rounded-full flex items-center justify-center text-4xl text-red-500">
            ⚠️
          </div>
        </div>
        <h3 className="text-2xl font-medium text-gray-800 mb-8">
          Are you sure you want to delete this game?
        </h3>
        <button
          onClick={handleDelete}
          className="neo-button-red w-full py-3.5 font-bold text-lg shadow-lg hover:shadow-xl"
        >
          ❌ Yes, Delete it!
        </button>
      </div>
    </div>
  );
};

export default DeleteGame;
