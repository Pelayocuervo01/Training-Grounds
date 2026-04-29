import { CalcularCuadrado } from "../utils/CalcularCuadrado";
import { useState } from "react";

export default function EsUnCuadrado(){

    const [arr, setArr] = useState<(number | null)[]>([null,null,null,null]);

    const handleChange = (index: number, value: string) => {
        const newArr = [...arr];
        newArr[index] = value === "" ? null : Number(value);
        setArr(newArr);
    }

    const hola = CalcularCuadrado(arr)

    const message = hola
    ?  "Es un cuadrado"
    : "No es un cuadrado"
    return (
        <div className="w-full self-start">
            <div className="bg-neutral-800 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            {arr.map((num,index) => (
                <input
                key={index}
                type="number"
                value={num ?? ""}
                onChange={(e) => handleChange(index, e.target.value)}
                className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                 />
            ))}
            </div>
            <h1 className={`text-2xl font-bold mt-6 ${hola ? "text-cyan-400" : "text-slate-400"}`}>
                { message }
            </h1>
        </div>
    )
}