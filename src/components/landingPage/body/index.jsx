import React from "react";
import "./style.scss";
import Oppurtunities from "./oppurtunities";
import Investment from "./investment";
import Investors from "./investors";

const Body = () => {
  return (
    <>
      <Oppurtunities />
      <hr className="hr" />
      <Investment />
      <Investors />
    </>
  );
};

export default Body;
