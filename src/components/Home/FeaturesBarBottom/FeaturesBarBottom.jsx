import React from "react";
import "./FeaturesBarBottom.css";

import {
  FiShield,
  FiAward,
  FiUsers,
  FiCreditCard,
} from "react-icons/fi";

const FeaturesData = [
  {
    id: 1,
    title: "100% Original Products",
    description: "Brand Warranty",
    icon: FiShield,
  },
  {
    id: 2,
    title: "Top Brands",
    description: "Latest Collections",
    icon: FiAward,
  },
  {
    id: 3,
    title: "Trusted by Thousands",
    description: "4.8★ Average Rating",
    icon: FiUsers,
  },
  {
    id: 4,
    title: "Easy EMI Options",
    description: "No Cost EMI Available",
    icon: FiCreditCard,
  },
];

export default function FeaturesBarBottom() {
  return (
    <div className="features_bottom_container">
      {FeaturesData.map((item) => {
        const Icon = item.icon;

        return (
          <div className="features_bottom_item" key={item.id}>
            <div className="features_bottom_icon_box">
              <Icon className="features_bottom_icon" />
            </div>

            <div className="features_bottom_content">
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}