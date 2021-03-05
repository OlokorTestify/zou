import React from "react";
import "./style.scss";

const Investment = () => {
  return (
    <>
      <section className="section1">
        <div className="invest-hero">
          <h1>Invest on your convenience</h1>
          <p>
            Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil
            <br />
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla
            <br />
            pariatur
          </p>
        </div>
        <div className="g-card">
          <div className="card-bgn">
            <h3>NEW FARM TODAY</h3>
            <hr />

            <div>
              <h1>
                Short terms
                <br /> investment
              </h1>
              <p>
                Invest in farms that will be ready
                <br /> for harvest in 3-18 months
              </p>
              <button>Browse farm</button>
            </div>
          </div>
          <div className="card-bgn2">
            <h3>FULLY FUNDED</h3>
            <hr />
            <div>
              <h1>
                Long terms
                <br /> investment
              </h1>
              <p>
                Consider farms that have long
                <br /> term investment program.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="works">
          <h1>How it works</h1>
          <p className="bar">
            Take your pick from the supply chain and participate in agribusiness
            projects that are backed up not only by Zou, but also by the best
            land, family heritage, innovation and overall superior expertise.
          </p>
          <hr className="her" />
          <div className="bg-second">
            <div className="h2">
              <h2>
                Select your farmshare and complete
                <br /> reservation form.
              </h2>
            </div>
            <div className="paragrph">
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investment;
