import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <div>
      <h1><Link  to="/about" >Home</Link></h1>
    </div>
  );
}

export default Home;