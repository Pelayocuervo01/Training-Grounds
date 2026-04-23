import { Link } from "react-router-dom";

export default function Header() {
    return(
         <header className="bg-slate-900 border-b border-white/20 px-6 py-4 w-full">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-cyan-400">
                    Training Grounds
                </h1>
                <div className="flex gap-6 text-slate-300">
                    <Link to ="/" className="hover:text-white">
                        Home
                    </Link>
                    <Link to="/projects" className="hover:text-white" >
                        Projects
                    </Link>

                </div>
            </nav>
        </header>
    )
}