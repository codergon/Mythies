import React from "react";

const SideBar = ({ colors, current, setCurrent }) => {
  return (
    <div className="sidebar_container">
      <p className="sidebar_header">Mythies</p>

      <div className="color_palette">
        <div className="colors_trigger">
          <i className="ph-plus"></i>
        </div>

        {colors.map((item, index) => {
          return (
            <div
              key={index}
              className={`color_cover ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            >
              <div className="color_item" style={{ background: item }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
