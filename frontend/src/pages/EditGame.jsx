import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateGame = () => {
  const [title,setTitle] = useState('');
  const [developer,setDeveloper] = useState('');
  const [releaseYear,setReleaseYear] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
      axios.get(`http://localhost:3000/games/${id}`)
    .then((response)=>{
      const game =response.data.data;
      setTitle(game.title);
      setDeveloper(game.developer);
      setReleaseYear(game.releaseYear);
    })
  },[id]);

  // Handler function
  const handleUpdateGame = ()=>{
    setLoading(true);
    const data = {
      title,
      developer,
      releaseYear
    };
    axios.put(`http://localhost:3000/games/${id}`,data)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
      alert('An error occured! please check the console to find out.');
    })
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Update Game</h1>
      {loading?<Spinner/>:''}
      <div className="flex flex-col border-2 border-sky-800 rounded-xl w-150 p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-400">Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          className="border-2 border-gray-500 px-2 py-2 w-full"
          ></input>
        </div>

         <div className="my-4">
          <label className="text-xl mr-4 text-gray-400">Developed By</label>
          <input 
          type="text"
          value={developer}
          onChange={(e)=>{setDeveloper(e.target.value)}}
          className="border-2 border-gray-500 px-2 py-2 w-full"
          ></input>
        </div>

         <div className="my-4">
          <label className="text-xl mr-4 text-gray-400">Release Year</label>
          <input 
          type="text"
          value={releaseYear}
          onChange={(e)=>{setReleaseYear(e.target.value)}}
          className="border-2 border-gray-500 px-2 py-2 w-full"
          ></input>
        </div>
        <button onClick={handleUpdateGame} className="py-3 bg-sky-300 m-8 cursor-pointer">
          Update
        </button>
      </div>
    </div>
  )
}

export default CreateGame