import React from "react";
import "./Products.css";
import { FaAngleDown } from "react-icons/fa6";
export default function Products() {
  return (
    <div className="result_container">
      <span className="title_txt">Showing 124 Products</span>
      <div className="sort">
        <span className="sort_txt">Sort By :</span>{" "}
        <span className="sort_item">Popularity <FaAngleDown/></span>
      </div>
    </div>
  );
}
