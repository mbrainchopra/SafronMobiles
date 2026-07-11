import React from "react";
import "./FeaturesBar.css";
import {
  FiTruck,
  FiCreditCard,
  FiRefreshCw,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";

const FeaturesData = [
  {
    id: 1,
    title: "Free Delivery",
    description: "On orders above ₹499",
    icon: FiTruck,
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "100% Secure Payment",
    icon: FiCreditCard,
  },
  {
    id: 3,
    title: "7 Days Return",
    description: "Easy Return & Exchange",
    icon: FiRefreshCw,
  },
  {
    id: 4,
    title: "1 Year Warranty",
    description: "Brand Warranty Products",
    icon: FiShield,
  },
  {
    id: 5,
    title: "24/7 Support",
    description: "Dedicated Support",
    icon: FiHeadphones,
  },
];

export default function FeaturesBar() {
  return (
    <div className="container_features">
      {FeaturesData.map((item) => {
        const Icon = item.icon;

        return (
          <div className="feature_item" key={item.id}>
            <div className="f_icon">
              <Icon className="icon" />
            </div>

            <div className="f_details">
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}