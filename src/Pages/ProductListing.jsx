import React from "react";
import TopOfferBar from "../components/Home/TopOfferBar/TopOfferBar";
import TopBar from "../components/Home/TopBar/TopBar";
import TopCatBar from "../components/Home/TopCatBar/TopCatBar";
import SideFilter from "../components/ProductList/SideFIlter/SideFilter";
import Breadcrumb from "../components/ProductList/Breadcrumb/Breadcrumb";

export default function ProductListing() {
  return (
    <>
      <div className="product_list_container">
        <TopOfferBar />
        <TopBar />
        <TopCatBar activeIndex={2} />
        <Breadcrumb
          items={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "SmartPhones",
              path: "/product_list",
            },
            
          ]}
        />
        <SideFilter />

        
      </div>
    </>
  );
}
