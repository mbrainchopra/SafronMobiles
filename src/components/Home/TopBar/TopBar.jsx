import React from "react";
import "./TopBar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function TopBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className={`menu_dialogue ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <IoCloseCircleOutline
            className="close-btn"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>

        <ul className="dialogue_menu_container">
          <li>Home</li>

          <li>Account</li>
          <li>Cart</li>
          <li>Track Order</li>
          <li>Support</li>
          <li>Shop Location</li>
        </ul>
      </div>

      <div className="topBar">
        <HiMenuAlt2
          className="menu_icon"
          onClick={() => setIsDrawerOpen(true)}
        />
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="icons_mobile">
          <div className="cart-icon-mobile">
            <FiShoppingCart className="cart-icon-mobile" />
            <span className="cart-count-mobile">0</span>
          </div>
        </div>

        <div className="search-bar">
          <div className="filter">
            <span>All Categories</span> <FaAngleDown className="nav-icon" />
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Search for mobiles, accessories..."
          />

          <button className="search">
            <IoSearchSharp />
          </button>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <FaRegUser className="nav-icon" />
              <span className="account_txt">Account</span>
            </li>
            <li className="cart-item">
              <div className="cart-icon">
                <FiShoppingCart className="nav-icon" />
                <span className="cart-count">0</span>
              </div>

              <span className="cart_txt">Cart</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="search-bar-mobile">
        <IoSearchSharp className="search-bar-mobile-icon" />

        <input
          type="text"
          className="search-input"
          placeholder="Search for mobiles, accessories..."
        />
      </div>
    </>
  );
}
