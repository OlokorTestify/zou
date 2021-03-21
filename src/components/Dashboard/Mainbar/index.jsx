import React from "react";
import "./style.scss";

const Mainbar = () => {
  const user = {
    name: "Olokor",
  };
  return (
    <>
      <section className="Mainbar">
        <div>
          <div className="mainbar-div">
            <div>
              <h1>{user.name},</h1>
              <p>Good morning, wash your hands..</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainbar;
