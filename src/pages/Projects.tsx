import { Link } from "react-router-dom";

interface ProjectCardProps {
    name: string;
    to: string;
    description?: string;
}

function ProjectCard({ name, to, description }: ProjectCardProps) {
    return (
        <Link to={to} className="block bg-neutral-900 border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-neutral-800 transition-all duration-200 group">
            <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                {name}
            </h2>
            {description && (
                <p className="text-slate-400 text-sm mt-2">{description}</p>
            )}
        </Link>
    );
}

export default function Projects() {
    return (
        <div className="w-full self-start">
            <h1 className="text-5xl font-bold text-white mb-8">
                Projects
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <ProjectCard name="Increase Button" to="/projects/increaseButton" description="Botón con contador." />
                <ProjectCard name="Es un cuadrado" to="/projects/EsUnCuadrado" description="Comprueba un input." />
                <ProjectCard name="Password Check" to="/projects/CheckPassword" description="Analiza si un String sigue x parámetros." />
            </div>
        </div>
    );
}
