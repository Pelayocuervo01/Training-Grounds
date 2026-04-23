export default function Header() {
    return(
        <header className="bg-slate-900 borde-b border-slate-800 px-6 py-4">
            <nav className= "flex justify-beetwen items-center">
                <h1 className="text-x1 font bold text-cyan-400">
                    Training Grounds
                </h1>
                <div className="flex gap-6 text-slate-300">
                    <a className="hover:text-white" href="/">
                        Home
                    </a>
                    <a className="hover:text-white" href="/projects">
                        Projects
                    </a>

                </div>
            </nav>
        </header>

    )
}