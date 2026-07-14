import React from "react";
import "./ExchangeBanner.css";
import img1 from "../../../assets/images/mobile_exchange.png";
import img2 from "../../../assets/images/mobile_exchange2.png";
export default function ExchangeBanner() {
  return (
    <>
      <div className="banner_exchage">
        <img src={img1} alt="" className="one" />
        <div className="ex_content">
          <span className="txt1">Exchange Old Phone</span>
          <span className="txt2">Get Upto ₹15,000 Off</span>
          <span className="txt3">Upgrade to the latest technology</span>
        </div>
        <img src={img2} alt="" className="two" />
      </div>
    </>
  );
}
