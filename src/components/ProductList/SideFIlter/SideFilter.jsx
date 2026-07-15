import React from "react";
import "./SideFilter.css";
export default function SideFilter() {
  const filterData = {
    brands: [
      {
        id: 1,
        name: "Apple",
        count: 22,
      },
      {
        id: 2,
        name: "Samsung",
        count: 28,
      },
      {
        id: 3,
        name: "OnePlus",
        count: 16,
      },
      {
        id: 4,
        name: "iQOO",
        count: 12,
      },
      {
        id: 5,
        name: "Google",
        count: 10,
      },
      {
        id: 6,
        name: "Nothing",
        count: 8,
      },
      {
        id: 7,
        name: "Realme",
        count: 14,
      },
      {
        id: 8,
        name: "Motorola",
        count: 9,
      },
      {
        id: 9,
        name: "Xiaomi",
        count: 18,
      },
      {
        id: 10,
        name: "OPPO",
        count: 13,
      },
      {
        id: 11,
        name: "Vivo",
        count: 15,
      },
    ],

    priceRanges: [
      {
        id: 1,
        label: "Under ₹10,000",
        min: 0,
        max: 10000,
      },
      {
        id: 2,
        label: "₹10,000 - ₹20,000",
        min: 10000,
        max: 20000,
      },
      {
        id: 3,
        label: "₹20,000 - ₹40,000",
        min: 20000,
        max: 40000,
      },
      {
        id: 4,
        label: "₹40,000 - ₹60,000",
        min: 40000,
        max: 60000,
      },
      {
        id: 5,
        label: "Above ₹60,000",
        min: 60000,
        max: 200000,
      },
    ],

    ram: [
      {
        id: 1,
        value: "4 GB",
        count: 18,
      },
      {
        id: 2,
        value: "6 GB",
        count: 26,
      },
      {
        id: 3,
        value: "8 GB",
        count: 30,
      },
      {
        id: 4,
        value: "12 GB",
        count: 22,
      },
      {
        id: 5,
        value: "16 GB",
        count: 8,
      },
    ],

    storage: [
      {
        id: 1,
        value: "64 GB",
        count: 15,
      },
      {
        id: 2,
        value: "128 GB",
        count: 25,
      },
      {
        id: 3,
        value: "256 GB",
        count: 32,
      },
      {
        id: 4,
        value: "512 GB",
        count: 18,
      },
      {
        id: 5,
        value: "1 TB",
        count: 6,
      },
    ],

    rating: [
      {
        id: 1,
        value: 4,
        label: "4★ & Above",
      },
      {
        id: 2,
        value: 3,
        label: "3★ & Above",
      },
    ],
  };



 



  return (
    <>
      <div className="filter_container">
        <div className="filter_title">
          <span className="filter_txt">Filter</span>
          <span className="clear_txt">Clear All</span>
        </div>
      </div>
    </>
  );
}
