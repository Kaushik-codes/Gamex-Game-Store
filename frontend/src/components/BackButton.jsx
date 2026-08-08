import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex cursor-pointer">
      <Link
        to={destination}
        className="neo-button px-5 py-2.5 flex items-center gap-2 text-gray-700 hover:text-blue-600"
      >
        <BsArrowLeft className="text-lg" />
        <span className="font-medium">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
