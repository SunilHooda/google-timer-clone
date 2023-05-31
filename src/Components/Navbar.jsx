import React from "react";
import Logo from "../Images/Header_Logo.png";

const Navbar = () => {
  return (
    <div className="logo">
      <a href="https://github.com/SunilHooda" target="_blank" rel="noreferrer">
        <img src={Logo} alt="Logo" />
      </a>
      <a href="https://sunilhooda.github.io/" target="_blank" rel="noreferrer">
        <h1>Sunil Hooda</h1>
      </a>
    </div>
  );
};

export default Navbar;
