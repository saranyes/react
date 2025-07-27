import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Premium from "./Pages/Premium";
import { Routes, Route } from "react-router-dom";
import Support from "./Pages/Support";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="bg-black h-screen font-stretch-50%">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
