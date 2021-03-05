import React from "react";
import "./style.scss";
import Image1 from "./asset/Group 14.png";
import Image2 from "./asset/Group 38.png";
import Image3 from "./asset/Icon3.png";
import Mask from "./asset/Mask (1).png";
import Leaf from "./asset/Combined Shape.png";

const Oppurtunities = () => {
  return (
    <>
      <div className="bg-opportunities">
        <img className="leaf" src={Leaf} alt="" />
        <img className="mask" src={Mask} alt="" />
        <h1>New Opportunities</h1>
        <p>
          We are the first and the only crowdfunding platform enabling you
          <br />
          to help finance our farmers.
        </p>
      </div>
      <div className="bg-card">
        <div className="card1">
          <img src={Image2} alt="" />
          <h2>Connect with our farmers</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
          </p>
        </div>
        <div className="card2">
          <img src={Image1} alt="" />
          <h2>Grow your business</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
          </p>
        </div>
        <div className="card3">
          <img src={Image3} alt="" />
          <h2>Social Impact investment</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
          </p>
        </div>
      </div>
    </>
  );
};

export default Oppurtunities;
