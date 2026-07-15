import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css"
import { MdOutlineNavigateNext } from "react-icons/md";
export default function Breadcrumb(props) {
  return (
    <div className="breadcrumb_container">
      {props.items.map((data, index) => (
        <Link key={index} to={data.path}>
          <span>{data.name}</span>
          {index < props.items.length - 1 && <span><MdOutlineNavigateNext className="icon_arrow"/> </span>}
        </Link>
      ))}
    </div>
  );
}