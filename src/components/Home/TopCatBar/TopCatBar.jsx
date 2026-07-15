import React from "react";
import "./TopCatBar.css";
import { Link } from "react-router-dom";

export default function TopCatBar(props) {
  const CategoriesData = [
    {
      id: 1,
      name: "Smartphones",
      image: "https://pngimg.com/uploads/iphone16/iphone16_PNG32.png",
    },
    {
      id: 2,
      name: "Earbuds",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    },
    {
      id: 3,
      name: "Tablets",
      image:
        "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
    },
    {
      id: 4,
      name: "Smart Watches",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
    },
    {
      id: 5,
      name: "Power Banks",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
    },
    {
      id: 6,
      name: "Headphones",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
    },
    {
      id: 7,
      name: "Chargers",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-20w-usb-c-power-adapter/1.webp",
    },
    {
      id: 8,
      name: "Cases",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-16-silicone-case-with-magsafe-plum/1.webp",
    },
  ];
  return (
    <>
      <nav className="topcatBar">
        <ul><Link className="nav-link" to="/">
          <li className={props.activeIndex === 1 ? "active" : ""}> Home </li></Link>

        
           
            <Link className="nav-link" to="/product_list">  <li className={props.activeIndex === 2 ? "active" : ""}>
              SmarPhones      </li>
            </Link>
     

          <li className={props.activeIndex === 3 ? "active" : ""}>Tablets</li>
          <li className={props.activeIndex === 4 ? "active" : ""}>
            Smart Watches
          </li>
          <li className={props.activeIndex === 5 ? "active" : ""}>
            Accessories
          </li>
          <li className={props.activeIndex === 6 ? "active" : ""}>
            Contact Us
          </li>
        </ul>
      </nav>

      <div className="catBarMobile">
        {CategoriesData.map((data) => (
          <div className="CatCardMobile">
            <div className="imageContainer">
              <img src={data.image} alt={data.name} />
            </div>

            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
