import React from "react";
import "./style.scss";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <>
      <div className="background">
        <Header />
      </div>
      <Body />
      <Footer />
    </>
  );
};

export default LandingPage;
