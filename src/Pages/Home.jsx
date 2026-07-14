import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import TopOfferBar from "../components/Home/TopOfferBar/TopOfferBar";
import TopBar from "../components/Home/TopBar/TopBar";
import TopCatBar from "../components/Home/TopCatBar/TopCatBar";
import SliderHome from "../components/Home/SliderHome/SliderHome";
import FeaturesBar from "../components/Home/FeaturesBar/FeaturesBar";
import CategoryHome from "../components/Home/CategoryHome/CategoryHome";
import TopSaleList from "../components/Home/TopSaleList/TopSaleList";
import ExchangeBanner from "../components/Home/ExchangeBanner/ExchangeBanner";
import FeaturesBarBottom from "../components/Home/FeaturesBarBottom/FeaturesBarBottom";
import Footer from "../components/Home/Footer/Footer";

function Home() {
  return (
    <>
      <TopOfferBar />
      <TopBar />
      <TopCatBar />
      <SliderHome />
      <FeaturesBar />
      <CategoryHome />
      <TopSaleList/>
      <ExchangeBanner/>
      <FeaturesBarBottom/>
     <Footer/>
    </>
  );
}

export default Home;
