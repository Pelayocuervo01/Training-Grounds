import Header from "../components/Header";
import LinkCard from "./LinksLayout";

export default function MainLayout({ children }: {children: React.ReactNode}){
    return(
        <div className="min-h-screen flex flex-col bg-neutral-900">
            <Header />
            <main className="flex-1 grid grid-cols-[200px_1fr_300px] gap-6 w-full px-30 py-12 items-start">
                {/* Columna izquierda */}
                <aside className="bg-neutral-800 border border-white/10 rounded-xl p-4">
                    <h2 className="text-white font-bold mb-3">Links</h2>
                    <LinkCard name="Claude" link="https://claude.ai/settings/usage"/>
                    <LinkCard name="Bg-color Tailwind" link="https://tailscan.com/tailwind/backgrounds/background-color-class"/>
                </aside>

                {/* Columna central */}
                <div>
                    { children }
                </div>

                {/* Columna derecha */}
                <aside className="bg-neutral-800 border border-white/10 rounded-xl p-4">
                    <h2 className="text-white font-bold mb-3">Info</h2>
                    <ul className="text-slate-400 text-sm space-y-2">
                        <li>Elemento A</li>
                        <li>Elemento B</li>
                        <li>Elemento C</li>
                    </ul>
                </aside>
            </main>

        </div>
    )
}