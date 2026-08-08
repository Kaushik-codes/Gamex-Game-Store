import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const GamesTable = ({games}) => {
  return (
   <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No.</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              {/* column will be hidden for mobile and tablet sizes */}
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Developer
              </th>
              {/* column will be hidden for mobile and tablet sizes */}
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Release Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr key={game._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {game.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {game.developer}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {game.releaseYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/games/details/${game._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/games/edit/${game._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-400" />
                    </Link>
                    <Link to={`/games/delete/${game._id}`}>
                      <AiOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default GamesTable