import { Link } from "react-router-dom";

export default function Projects(){
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
                Projects
            </h1>
            <div>
                <Link to="/increaseButton" className="text-2xl font-bold text-white mb-4">
                IncreaseButton
                </Link>
            </div>

        </div>
    )
}