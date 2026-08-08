import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const GamesCard = ({ games }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <div key={game._id} className="neo-card relative flex flex-col">
          {/* ✅ Fixed Year Tag - Bigger, bolder, with a solid colored background */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg px-5 py-1.5 rounded-full shadow-lg border-2 border-white/30">
            {game.releaseYear}
          </div>

          <div className="mb-3 pb-3 border-b border-gray-300/50">
            <span className="text-xs text-gray-500 font-mono">#{game._id.slice(-6)}</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="neo-inset w-12 h-12 flex items-center justify-center text-blue-500 text-2xl">
              <PiBookOpenTextLight />
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-800">{game.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5 text-gray-600">
            <BiUserCircle className="text-2xl text-purple-400" />
            <span className="font-medium">{game.developer}</span>
          </div>

          <div className="flex justify-around mt-auto pt-4 border-t border-gray-300/50">
            <Link to={`/games/details/${game._id}`} className="neo-button p-2.5 text-green-600 hover:text-green-800">
              <BsInfoCircle className="text-2xl" />
            </Link>
            <Link to={`/games/edit/${game._id}`} className="neo-button p-2.5 text-yellow-500 hover:text-yellow-700">
              <AiOutlineEdit className="text-2xl" />
            </Link>
            <Link to={`/games/delete/${game._id}`} className="neo-button p-2.5 text-red-500 hover:text-red-700">
              <MdOutlineDelete className="text-2xl" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesCard;