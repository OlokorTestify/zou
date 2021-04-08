import React from "react";
import Account from "../assets/account.png";
import Refresh from "../assets/cached-black-24dp/1x/outline_cached_black_24dp.png";
import Shield from "../assets/sh1eld/2x/outline_shield_white_24dp.png";
import Dollar from "../assets/dollar/2x/outline_attach_money_white_24dp.png";
import Rig from "../assets/zig/2x/outline_timeline_white_24dp.png";
import Video from "../assets/reel/2x/outline_theaters_black_24dp.png";
import Radio from "../assets/circle/1x/outline_radio_button_unchecked_black_24dp.png";
import Like from "../assets/like/1x/outline_thumb_up_black_24dp.png";
import Lock from "../assets/lock/1x/outline_lock_black_24dp.png";
import "./style.scss";

const Home = () => {
  const user = {
    name: "Olokor",
    amount: 0.0,
  };
  return (
    <>
      <section className="mainBar_home">
        <div className="Mainbar_home">
          <div>
            <div className="mainbar-div_home">
              <div className="head">
                <h1>{user.name},</h1>
                <p>Good morning, wash your hands..</p>
              </div>
            </div>
          </div>
          <div className="image6">
            <img src={Account} alt="" />
          </div>
        </div>
        <div className="quick1">
          <div>
            <img src={Refresh} alt="" />
          </div>
          <div className="quickSave">
            <button>+QUICK SAVE</button>
          </div>
        </div>
        <div className="cover">
          <div className="shield">
            <div>
              <img src={Shield} alt="" />
            </div>
            <div className="p">
              <p className="pp">Total Savings</p>
              <p className="amount">NGN{user.amount}</p>
            </div>
          </div>
          <div className="rig">
            <div>
              <img src={Rig} alt="" />
            </div>
            <div className="p">
              <p className="pp">Total Investments</p>
              <p className="amount">NGN{user.amount}</p>
            </div>
          </div>
          <div className="dollar">
            <div>
              <img src={Dollar} alt="" />
            </div>
            <div className="p">
              <p className="pp">Flex Dollar</p>
              <p className="amount">NGN{user.amount}</p>
            </div>
          </div>
          <div className="video">
            <div>
              <img src={Video} alt="" />
            </div>
            <div className="p">
              <p className="pp">Flex Naira</p>
              <p className="amount">NGN{user.amount}</p>
            </div>
          </div>
        </div>
        <div className="activities">
          <div className="activity">
            <p>TO-DO LIST</p>
            <div className="div">
              <div>
                <img src={Radio} alt="" />
              </div>
              <p>Add your BVN now!</p>
            </div>
            <div className="div">
              <div>
                <img src={Radio} alt="" />
              </div>
              <div>
                <p>Tell us more about yourself</p>
              </div>
            </div>
            <div className="diff">
              <div>
                <img src={Radio} alt="" />
              </div>
              <div>
                <p>Securely add a valid debit card</p>
              </div>
            </div>
            <div className="div">
              <div>
                <img src={Like} alt="" />
              </div>
              <div>
                <p>See your recent activities</p>
                <p>See your most recent activities on Zou</p>
              </div>
            </div>
            <div className="div">
              <div>
                <div>
                  <img src={Lock} alt="" />
                </div>
                <div>
                  <p>Create a Safelock</p>
                  <p>See your most recent activities on Zou</p>
                </div>
              </div>
            </div>
            <p>RECENT ACTIVITIES</p>
            <div className="div">
              <div>
                <img src={Lock} alt="" />
              </div>
              <div>
                <p>Just registered</p>
                <p>1 wk ago</p>
              </div>
            </div>
          </div>
          <div className="div"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
