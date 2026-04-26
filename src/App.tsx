import { Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import IncreaseButton from "./pages/IncreaseButton/IncreaseButton"
import EsUnCuadrado from "./pages/EsUnCuadrado/EsUnCuadrado";


export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/IncreaseButton" element={<IncreaseButton />} />
        <Route path="/projects/EsUnCuadrado" element={<EsUnCuadrado />} />
      </Routes>
    </MainLayout>
  );
}