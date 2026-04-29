import { ProjectCards } from "../components/ProjectCard";


export default function Projects() {
    return (
        <div className="w-full self-start">
            <h1 className="text-5xl font-bold text-white mb-8">
                Projects
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <ProjectCards name="Increase Button" to="/projects/IncreaseButton" description="Botón con contador." />
                <ProjectCards name="Es un cuadrado" to="/projects/EsUnCuadrado" description="Comprueba un input." />
                <ProjectCards name="Password Check" to="/projects/CheckPassword" description="Analiza si un String sigue x parámetros." />
            </div>
        </div>
    );
}
