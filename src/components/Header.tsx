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
        <header className="bg-neutral-950 border-b border-white/20 px-30 py-4 w-full">
            <nav className="grid grid-cols-[200px_1fr_300px] gap-6 items-center">
                <h1 className="text-xl font-bold text-zinc-400">
                    Training Grounds
                </h1>
                <div className="flex gap-6 text-slate-300 justify-center">
                    <Link to="/" className="hover:text-white">
                        Home
                    </Link>
                    <Link to="/projects" className="hover:text-white">
                        Projects
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img onClick={() => setPokemon(getRandomElement(Pokemon))} src={url} className="w-14 h-13 cursor-pointer" />
                </div>
            </nav>
        </header>
    )
}