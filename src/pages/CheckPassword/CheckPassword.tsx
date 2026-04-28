import { validation } from "./Validation";
import { useState } from "react";

export default function CheckPassword(){
    const [password, setPassword] = useState("")
    return(
        <div className="bg-neutral-800 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-200"
            />
            <div>
            <h1>
                { password }
            </h1>
            </div>
        </div>
    )
}