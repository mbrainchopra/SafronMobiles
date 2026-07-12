import React from "react";
import "./TopSaleList.css";
import { GrLinkNext } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
export default function TopSaleList() {
  const phoneImages = [
    "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/realme-gt6.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg",
  ];

  const phoneNames = [
    "iPhone 15 Pro Max",
    "Google Pixel 8",
    "OnePlus 12R",
    "Nothing Phone 2",
    "Motorola Edge 50 Pro",
    "Xiaomi 14",
    "Realme GT 6",
    "Vivo V30 Pro",
    "Samsung Galaxy S24",
    "Samsung Galaxy A55",
    "iPhone 14",
    "iPhone 15",
    "Redmi Note 13 Pro",

   
  ];

  const TopSales = phoneNames.map((name, index) => ({
    id: index + 1,
    name,
    brand: name.split(" ")[0],
    price: 20000 + index * 3500,
    oldPrice: 24000 + index * 3500,
    discount: 5 + (index % 15),
    rating: (4.2 + (index % 8) * 0.1).toFixed(1),
    reviews: 40 + index * 9,
    ram: ["8GB", "12GB", "16GB"][index % 3],
    storage: ["128GB", "256GB", "512GB"][index % 3],
    image: phoneImages[index % phoneImages.length],
  }));
  return (
    <>
      <div className="viewallPhone">
        <span className="title">Best Selling Smartphones</span>
        <span className="txt">
          View All <GrLinkNext />
        </span>
      </div>

      <div className="topsale_container">
        {TopSales.map((data) => (
          <div className="sale_item">
            <img src={data.image} alt={data.name} className="item_img" />
            <div className="details">
              <div className="model_block">
                <span className="model_name">{data.name}</span>
              </div>
              <div className="spec_block">
                <span className="spec">
                  {data.ram} {" | "} {data.storage}
                </span>
              </div>
              <div className="offer_block">
                <span className="offer_price">₹{data.price}</span>
                <span className="act_price">₹{data.oldPrice}</span>
              </div>

              <div className="rating_block">
                <FaStar className="star" />
                <span className="rating">
                  {data.rating} ({data.reviews})
                </span>
              </div>
            </div>
            <span className="offer">-{data.discount}%</span>

            <BsCartPlus className="cart" />
            <IoMdHeartEmpty className="like" />
          </div>
        ))}
      </div>
    </>
  );
}
