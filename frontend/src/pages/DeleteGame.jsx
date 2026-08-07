import BackButton from "../components/BackButton";
import {useParams,useNavigate} from 'react-router-dom';
import Spinner from "../components/Spinner";
import axios from "axios";
import { useState } from "react";

const DeleteGame = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = ()=>{
    setLoading(true);
    axios.delete(`http://localhost:3000/games/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
      alert('An error occured! please check the console to find out.');
    })
  }
  return (
    <div
    className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Game</h1>
      {loading?<Spinner/>:''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-150 p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this game?</h3>
        <button onClick={handleDelete} className="bg-red-500 text-white rounded-xl p-2 cursor-pointer w-full m-8">Yes, Delete it!</button>
      </div>
      </div>
  )
}

export default DeleteGame