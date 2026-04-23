import { useState } from "react";

export default function increaseButton(){

    const [count, sumarCount] = useState(0)
    
    return(
        <div className="text-center">

            <p className="text-5xl font-bold text-white mb-4">
                { count }
            </p>
            <button className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition ext-5xl font-bold text-white mb-4"
            onClick={()=> sumarCount(count + 1)}>
                Sumar
            </button>
        </div>
    )
}

