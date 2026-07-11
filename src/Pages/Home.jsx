import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import TopOfferBar from "../components/TopOfferBar/TopOfferBar";
import TopBar from "../components/TopBar/TopBar";
import TopCatBar from "../components/TopCatBar/TopCatBar";
import SliderHome from "../components/SliderHome/SliderHome";
import FeaturesBar from "../components/FeaturesBar/FeaturesBar";

function Home() {
  return (
    <>
      <TopOfferBar />
      <TopBar />
      <TopCatBar />
      <SliderHome />
      <FeaturesBar />
    </>
  );
}

export default Home;
