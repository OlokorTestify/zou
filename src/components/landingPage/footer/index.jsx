import React from "react";
import history from "../../utils";
import "./style.scss";
import Overlay from "./asset/Path 4.png";

const Footer = () => {
  const handleClick = (id) => {
    history.push("/signup");
  };
  return (
    <>
      <div className="footer">
        <img src={Overlay} alt="" />
        <div className="Zou">
          <h1>ZOU</h1>
        </div>
        <div className="footer2">
          <div className="in-div">
            <div>
              <h3>COMPANY</h3>
            </div>
            <div>
              <p>
                <a href="www.google.com">About Us</a>
              </p>
              <p>
                <a href="www.google.com">Team</a>
              </p>
              <p>
                <a href="www.google.com">Careers</a>
              </p>
              <p>
                <a href="www.google.com">Contact</a>
              </p>
            </div>
          </div>
          <div className="in-div">
            <div>
              <h3>INVEST</h3>
            </div>
            <div className="margin">
              <p>
                <a href="www.google.com">Features</a>
              </p>
              <p>
                <a href="www.google.com">How it works</a>
              </p>
              <p>
                <a href="www.google.com">Pricing</a>
              </p>
              <p>
                <a href="www.google.com">Login</a>
              </p>
            </div>
          </div>

          <div className="in-div">
            <div>
              <h3>LEGAL</h3>
            </div>
            <div>
              <p>
                <a href="www.google.com">Privacy</a>
              </p>
              <p>
                <a href="www.google.com">Terms</a>
              </p>
              <p>
                <a href="www.google.com">Security</a>
              </p>
            </div>
          </div>
          <div className="in-div2">
            <h3>Blog Zou</h3>
            <p>Write email to us</p>
            <p>
              <a href="www.google.com">info@zoufarm.com</a>
            </p>
            <button onClick={handleClick}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
