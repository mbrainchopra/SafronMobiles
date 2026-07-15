import React from "react";
import TopOfferBar from "../components/Home/TopOfferBar/TopOfferBar";
import TopBar from "../components/Home/TopBar/TopBar";
import TopCatBar from "../components/Home/TopCatBar/TopCatBar";
import SideFilter from "../components/ProductList/SideFIlter/SideFilter";
import Breadcrumb from "../components/ProductList/Breadcrumb/Breadcrumb";
import Products from "../components/ProductList/Products/Products";

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
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <SideFilter />
          <Products />
        </div>
      </div>
    </>
  );
}
