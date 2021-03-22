import React from "react";
import "./style.scss";

const SideBar = ({ isActive, onClose }) => {
  return (
    <>
      <div
        className={`sidenav_container ${
          isActive ? "open_side_nav" : "close_side_nav"
        }`}
      >
        <ul>
          <li className="active none">Home</li>
          <li className="none">Team</li>
          <li className="none">Product</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
