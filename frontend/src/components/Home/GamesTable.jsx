import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const GamesTable = ({ games }) => {
  return (
    <div className="neo-card overflow-hidden p-0">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#d5dbe5]">
            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-300/50">No.</th>
            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-300/50">Title</th>
            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-300/50 max-md:hidden">Developer</th>
            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-300/50 max-md:hidden">Year</th>
            <th className="p-4 text-center font-semibold text-gray-700 border-b border-gray-300/50">Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={game._id} className="border-b border-gray-300/30 hover:bg-[#dce2ec] transition-colors">
              <td className="p-4 text-gray-600 font-mono">{index + 1}</td>
              <td className="p-4 font-medium text-gray-800">{game.title}</td>
              <td className="p-4 text-gray-600 max-md:hidden">{game.developer}</td>
              <td className="p-4 text-gray-600 max-md:hidden">{game.releaseYear}</td>
              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <Link to={`/games/details/${game._id}`} className="neo-button p-2 text-green-600 hover:text-green-800">
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link to={`/games/edit/${game._id}`} className="neo-button p-2 text-yellow-500 hover:text-yellow-700">
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <Link to={`/games/delete/${game._id}`} className="neo-button p-2 text-red-500 hover:text-red-700">
                    <AiOutlineDelete className="text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GamesTable