import React from "react";
import "./style.scss";
import Design from "./Assets/Combined Shape.png";

const Investors = () => {
  return (
    <>
      <div className="bg-section">
        <h1 className="main-h1">
          <img src={Design} alt="" />
          What investors like you are saying about Zou
        </h1>
        <div className="main-card">
          <div className="bg-card1">
            <div className="split">
              <div className="user1"></div>
              <div className="header">
                <p className="p-green">Fernando Soler</p>
                <p>
                  Telecommunication
                  <br /> Engineer
                </p>
              </div>
            </div>
            <p className="pst">
              Quis autem vel eum iure
              <br /> reprehenderit qui in ea voluptate
              <br /> velit esse quam nihil molestiae...
            </p>
          </div>
          <div className="bg-card1">
            <div className="split">
              <div className="userr"></div>
              <div className="header">
                <p className="p-green">Ilone Pickford</p>
                <p>
                  Telecommunication
                  <br /> Engineer
                </p>
              </div>
            </div>
            <p className="pst">
              Quis autem vel eum iure
              <br /> reprehenderit qui in ea voluptate
              <br /> velit esse quam nihil molestiae...
            </p>
          </div>
          <div className="bg-card1">
            <div className="split">
              <div className="user1"></div>
              <div className="header">
                <p className="p-green">Fernando Soler</p>
                <p>
                  Telecommunication
                  <br /> Engineer
                </p>
              </div>
            </div>
            <p className="pst">
              Quis autem vel eum iure
              <br /> reprehenderit qui in ea voluptate
              <br /> velit esse quam nihil molestiae...
            </p>
          </div>
        </div>
        <div className="future">
          <h2>
            The future of <span className="p-green">Farm Investing</span> is Zou
          </h2>
          <button>Invest Now</button>
        </div>
      </div>
    </>
  );
};

export default Investors;
