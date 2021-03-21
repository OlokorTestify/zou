import React from "react";
import Hamburger from "./asset/diy/1x/outline_menu_white_24dp.png";
import Home from "./asset/white-24dp/1x/outline_home_white_24dp.png";
import Bullseye from "./asset/white-24dp (2)/1x/outline_track_changes_white_24dp.png";
import Account from "./asset/person_outline-white-24dp/1x/outline_person_outline_white_24dp.png";
import LogOut from "./asset/white-24dp (1)/1x/outline_power_settings_new_white_24dp.png";
import "./style.scss";

const SideBar = () => {
  return (
    <>
      <section className="sideBar">
        <div className="header">
          <img src={Hamburger} alt="" />
          <h2>ZOU</h2>
        </div>
        <div className="mainContent">
          <div className="content">
            <img src={Home} alt="" />
            <p>Home</p>
          </div>
          <div className="content">
            <img src={Bullseye} alt="" />
            <div className="left">
              <p>Savings</p>
            </div>
          </div>
          <div className="content">
            <img src={Home} alt="" />
            <p>Invest</p>
          </div>
          <div className="content">
            <img src={Account} alt="" />
            <p>Account</p>
          </div>
          <div className="content2">
            <img src={LogOut} alt="" />
            <p>Log Out</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
