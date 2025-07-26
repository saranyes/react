import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Premium from "./Pages/Premium";
import { Routes, Route } from "react-router-dom";
import Support from "./Pages/Support";

function App() {
  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
