import React from "react";

function Navbar() {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items  h1_portfolio">Portfolio</div>
        <div className="right">
          <a href="#Home" className="nav_items">
            Home
          </a>
          <a href="#Experience" className="nav_items">
            Experience
          </a>
          <a href="#Skills" className="nav_items">
            Skills
          </a>
          <a href="#Project" className="nav_items">
            Project
          </a>
          <a href="#Contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
