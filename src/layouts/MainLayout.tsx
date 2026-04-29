import Header from "./Header";
import LinkCard from "./LinksLayout";
import DocsCard from "./DocsLayout"

export default function MainLayout({ children }: {children: React.ReactNode}){
    return(
        <div className="min-h-screen flex flex-col bg-neutral-900">
            <Header />
            <main className="flex-1 grid grid-cols-[200px_1fr_300px] gap-6 w-full px-30 py-12 items-start">
                {/* Columna izquierda */}
                <div className="flex flex-col gap-4">
                    <aside className="bg-neutral-800 border border-white/10 rounded-xl p-4">
                        <h2 className="text-white font-bold mb-3">Links</h2>
                        <LinkCard name="GitHub Repo" link="https://github.com/Pelayocuervo01/Training-Grounds"/>
                        <LinkCard name="Claude" link="https://claude.ai/settings/usage"/>
                        <LinkCard name="Bg-color Tailwind" link="https://tailscan.com/tailwind/backgrounds/background-color-class"/>
                    </aside>

                    <aside className="bg-neutral-800 border border-white/10 rounded-xl p-4">
                        <h2 className="text-white font-bold mb-3">Docs</h2>
                        <DocsCard name="useState" link="https://react.dev/reference/react/useState"/>
                    </aside>
                </div>

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