import React from "react";
import "./CategoryHome.css";
import { GrLinkNext } from "react-icons/gr";
export default function CategoryHome() {
 const CategoriesData = [
  {
    id: 1,
    name: "Smartphones",
    image: "https://pngimg.com/uploads/iphone16/iphone16_PNG32.png",
  },
  {
    id: 2,
    name: "Earbuds",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
  },
  {
    id: 3,
    name: "Tablets",
    image: "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
  },
  {
    id: 4,
    name: "Smart Watches",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
  },
  {
    id: 5,
    name: "Power Banks",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
  },
  {
    id: 6,
    name: "Headphones",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
  },
  {
    id: 7,
    name: "Chargers",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-20w-usb-c-power-adapter/1.webp",
  },
  {
    id: 8,
    name: "Cases",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-16-silicone-case-with-magsafe-plum/1.webp",
  },
  {
    id: 9,
    name: "Gaming Phones",
    image: "https://pngimg.com/uploads/iphone16/iphone16_PNG32.png",
  },
  {
    id: 10,
    name: "Bluetooth Speakers",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
  },
  {
    id: 11,
    name: "Wireless Chargers",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-20w-usb-c-power-adapter/1.webp",
  },
  {
    id: 12,
    name: "Laptop Bags",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
  },
  {
    id: 13,
    name: "Screen Protectors",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-16-silicone-case-with-magsafe-plum/1.webp",
  },
  {
    id: 14,
    name: "USB Cables",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-20w-usb-c-power-adapter/1.webp",
  },
  {
    id: 15,
    name: "Neckbands",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
  },
  {
    id: 16,
    name: "Fitness Bands",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
  },
  {
    id: 17,
    name: "Camera Phones",
    image: "https://pngimg.com/uploads/iphone16/iphone16_PNG32.png",
  },
  {
    id: 18,
    name: "Phone Stands",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
  },
  {
    id: 19,
    name: "Memory Cards",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
  },
  {
    id: 20,
    name: "Accessories",
    image: "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-16-silicone-case-with-magsafe-plum/1.webp",
  },
];
  return (
    <>
    <div className="viewall">
      <span className="title">Shop By Category</span>
           <span className="txt">View All <GrLinkNext/></span>
    </div>
     <div className="container_cat">
      {CategoriesData.map((data) => (  <div className="cat_item">
          <img src={data.image} alt="" className="cat_img" />
          <span>{data.name}</span>
        </div>)
      
      )}
    </div>
    
    </>
   
  );
}
