import React from "react";
import history from "../../../utils";
import Hamburger from "./asset/hamburger (2)/1x/outline_menu_black_24dp.png";
import "./style.scss";

const Navbar = () => {
  const handleClick = (id) => {
    history.push("/login");
  };
  return (
    <>
      <section>
        <div className="Navbar">
          <div>
            <h1>ZOU</h1>
          </div>
          <div className="Navbar-list">
            <ul>
              <li className="active none">Home</li>
              <li className="none">Team</li>
              <li className="none">Product</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="navbar-button">
            <button onClick={handleClick}>Login</button>
          </div>
          <div className="hamburger">
            <img src={Hamburger} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
