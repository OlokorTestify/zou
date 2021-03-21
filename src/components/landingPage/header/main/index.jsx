import React from "react";
import "./style.scss";
import Image from "../asset/Asset 2@2x.png";
import Image2 from "../asset/Asset 1.png";

const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="hero">
          <div className="width">
            <h1>A New Way to Invest in Agriculture</h1>
          </div>
          <p>
            Zou provides farmers, ranchers, private foresters, and agricultural
            producers with online self service applications and educational
            materials...
          </p>

          <div className="inputt">
            <div className="input_width">
              <input type="text" name="Email" placeholder="Email" />
            </div>
            <button>Invest Now</button>
          </div>
        </div>

        <div className="img">
          <div className="image">
            <img src={Image} alt="" />
          </div>
          <div className="image2">
            <img src={Image2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
