import React from "react";
import "./TopOfferBar.css";
import { FiMapPin, FiHeadphones, FiPackage } from "react-icons/fi";
 



export default function TopOfferBar() {
  return (
    <>
      <div className="container">
         
        <span className="offer_txt">
          💥Big Summer sale🔥 - Up to <span className="offercount">20%</span> off on
          best smartphones!
        </span>

        <nav className="navbar">
          <ul className="nav-container">
            <li>
              <FiPackage className="nav-icon" />
              <span>Track Order</span>
            </li>

            <li>
              <FiHeadphones className="nav-icon" />
              <span>Support</span>
            </li>

            <li>
              <FiMapPin className="nav-icon" />
              <span>Store Location</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
