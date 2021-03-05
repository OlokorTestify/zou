import React from "react";
import "./style.scss";
import Overlay from "./asset/Path 4.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Overlay} alt="" />
        <div>
          <h1>ZOU</h1>
        </div>
        <div className="footer2">
          <div className="in-div">
            <h3>COMPANY</h3>
            <p>
              <a href="">About Us</a>
            </p>
            <p>
              <a href="">Team</a>
            </p>
            <p>
              <a href="">Careers</a>
            </p>
            <p>
              <a href="">Contact</a>
            </p>
          </div>
          <div className="in-div">
            <h3>INVEST</h3>
            <p>
              <a href="">Features</a>
            </p>
            <p>
              <a href="">How it works</a>
            </p>
            <p>
              <a href="">Pricing</a>
            </p>
            <p>
              <a href="">Login</a>
            </p>
          </div>
          <div className="in-div">
            <h3>LEGAL</h3>
            <p>
              <a href="">Privacy</a>
            </p>
            <p>
              <a href="">Terms</a>
            </p>
            <p>
              <a href="">Security</a>
            </p>
          </div>
          <div className="in-div2">
            <h3>Blog Zou</h3>
            <p>Write email to us</p>
            <p>
              <a href="">info@zoufarm.com</a>
            </p>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
