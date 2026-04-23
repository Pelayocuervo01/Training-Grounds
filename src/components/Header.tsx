import { Link } from "react-router-dom";
import { Pokemon } from "../pages/Pokemons";
import { useState } from "react";

export default function Header() {

    const getRandomElement = (arr: any[]) =>
        arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined
    const [pokemon] = useState(getRandomElement(Pokemon))

    const isShiny = Math.floor(Math.random() * 10) === 1;

    const url = isShiny
    ? `https://img.pokemondb.net/sprites/black-white/anim/shiny/${pokemon.toLowerCase()}.gif`
    : `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.toLowerCase()}.gif`;

    return(
         <header className="bg-neutral-950 border-b border-white/20 px-6 py-4 w-full overflow-visible">
            <nav className="max-w-6xl mx-auto flex justify-between items-center relative">
                <h1 className="text-xl font-bold text-zinc-400">
                    Training Grounds
                </h1>
                <img src={ url } className="absolute left-1/2 -translate-x-1/2 w-14 h-13" />
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