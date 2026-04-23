import { Link } from "react-router-dom";
import gamecubeGif from "../assets/gamecube.gif";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/projects">
        <img
          src={gamecubeGif}
          className="mx-auto -mt-0 w-100 h-100 cursor-pointer transition-transform duration-200 hover:scale-120"
          alt="Go to Projects"
        />
      </Link>
    </div>
  );
}