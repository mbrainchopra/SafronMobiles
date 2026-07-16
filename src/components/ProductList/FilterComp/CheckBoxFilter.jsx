import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import "./CheckBoxFilter.css";

export default function CheckBoxFilter({ props, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter_block_container">
      <div
        className="filter_block"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <span style={{ fontWeight: 600 }}>{title}</span>

        <div className="actionIcons">
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      {open &&
        props.map((data) => (
          <div key={data.id} className="checkbox_item">
            <input
              type="checkbox"
              id={`filter-${title}-${data.id}`}
              name={data.name}
              value={data.id}
            />

            <label htmlFor={`filter-${title}-${data.id}`}>
              {data.name} {data.count ? `(${data.count})` : ""}
            </label>
          </div>
        ))}
    </div>
  );
}
