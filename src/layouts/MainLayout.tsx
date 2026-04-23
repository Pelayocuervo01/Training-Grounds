import Header from "../components/Header";


export default function MainLayout({ children }: {children: React.ReactNode}){
    return(
        <div className="min-h-screen flex flex-col bg-neutral-900">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-start w-full max-w-6xl mx-auto px-6 py-12">
                { children }
            </main>

        </div>
    )
}