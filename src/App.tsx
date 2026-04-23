import { Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import IncreaseButton from "./pages/increaseButton";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/increaseButton" element={<IncreaseButton />} />
      </Routes>
    </MainLayout>
  );
}