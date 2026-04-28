import { Link } from "react-router-dom";
import { Pokemon } from "../pages/Scripts/Pokemons";
import { useState } from "react";


export default function Header() {

    const getRandomElement = (arr: any[]) =>
        arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined
    const [pokemon, setPokemon] = useState(getRandomElement(Pokemon))

    const isShiny = Math.floor(Math.random() * 10) === 1;

    const url = isShiny
    ? `https://img.pokemondb.net/sprites/black-white/anim/shiny/${pokemon.toLowerCase()}.gif`
    : `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.toLowerCase()}.gif`;

    return(
        <header className="bg-neutral-950/80 backdrop-blur-sm border-b border-white/10 px-30 py-3 w-full sticky top-0 z-50">
            <nav className="grid grid-cols-[200px_1fr_300px] gap-6 items-center">
                <h1 className="text-lg font-bold tracking-wider text-white/70 uppercase">
                    Training Grounds
                </h1>
                <div className="flex gap-2 justify-center">
                    <Link to="/" className="text-slate-400 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium">
                        Home
                    </Link>
                    <Link to="/projects" className="text-slate-400 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium">
                        Projects
                    </Link>
                </div>
                <div className="flex justify-end items-center gap-2">
                    {isShiny && <span className="text-yellow-400 text-xs font-semibold tracking-wide uppercase">Shiny!</span>}
                    <img
                        onClick={() => setPokemon(getRandomElement(Pokemon))}
                        src={url}
                        title={pokemon}
                        className="w-14 h-13 cursor-pointer hover:scale-110 transition-transform duration-200"
                    />
                </div>
            </nav>
        </header>
    )
}