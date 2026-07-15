import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./styles/color.css";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import ProductListing from "./Pages/ProductListing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
             <Route path="/product_list" element={<ProductListing />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
