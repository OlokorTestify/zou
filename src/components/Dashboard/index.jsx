import React from "react";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import "./style.scss";

const DashBoard = () => {
  return (
    <>
      <section className="Dashboard">
        <Sidebar />
        <Mainbar />
      </section>
    </>
  );
};

export default DashBoard;
