import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./styles/color.css";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
