import { useState } from "react";
import history from "../../../utils";
import Hamburger from "./asset/hamburger (2)/1x/outline_menu_black_24dp.png";
import SideNav from "./sideBar/index";
import "./style.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    history.push("/login");
  };
  const handleChange = () => {
    setIsActive(!isActive);
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
          <div className="hamburger" onClick={handleChange}>
            <img src={Hamburger} alt="" />
          </div>
        </div>
        <SideNav isActive={isActive} onClose={() => setIsActive(!isActive)} />
      </section>
    </>
  );
};

export default Navbar;
