import { PasswordGenerator } from "@/utils/PasswordGenerator"

export default function GeneratePassword(){
    const psswd: string = ""
    return(
        <div>
            <button className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition ext-5xl font-bold text-white mb-4">
                Generate Password
            </button>
            <p className="text-5xl font-bold text-white mb-4">
                { psswd }
            </p>
        </div>

    )
}