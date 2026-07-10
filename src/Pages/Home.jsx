import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import TopOfferBar from "../components/TopOfferBar/TopOfferBar";
import TopBar from "../components/TopBar/TopBar";
 

function Home() {
  return (
    <>
  <TopOfferBar/>
  <TopBar/>
    </>
  );
}

export default Home;