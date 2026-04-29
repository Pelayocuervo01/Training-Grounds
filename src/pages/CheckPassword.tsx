import { validation } from "../utils/Validation";
import { useState } from "react";

const labels = ["", "Muy débil", "Débil", "Media", "Fuerte", "Muy fuerte"]

export default function CheckPassword(){
    const [password, setPassword] = useState("")

    const valPass = validation(password)
    const percent = (valPass / 5) * 100
    const hue = (valPass / 5) * 120
    const barColor = `hsl(${hue}, 80%, 45%)`

    return(
        <div className="bg-neutral-800 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-200"
            />
            <div className="flex flex-col gap-1">
                <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-300" style={{ width: `${percent}%`, backgroundColor: barColor }} />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                    <span style={{ color: password ? barColor : undefined }}>
                        {password ? labels[valPass] : ""}
                    </span>
                    <span>{password ? `${valPass}/5` : ""}</span>
                </div>
            </div>
        </div>
    )
}
