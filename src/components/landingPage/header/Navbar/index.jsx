import React from "react";
import history from "../../../utils";
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
              <li className="active">Home</li>
              <li>Team</li>
              <li>Product</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="navbar-button">
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
