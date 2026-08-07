
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ShowGame = () => {
  const [game,setGame] = useState({});
  const [loading,setLoading] = useState(true);
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:3000/games/${id}`)
    .then((response)=>{
      setGame(response.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error);
    })
  },[id]);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Game Details</h1>
      {loading?(
        <Spinner />
      ):(
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Id</span>
            <span>{game._id}</span>
          </div>
           <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Title</span>
            <span>{game.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Developer</span>
            <span>{game.developer}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Release Year</span>
            <span>{game.releaseYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Launched At</span>
            <span>{new Date(game.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Last Updated</span>
            <span>{new Date(game.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowGame