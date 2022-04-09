import React from "react";

const Header = () => {
  return (
    <div className="bg-dark py-2 px-3">
      <h1 className="text-white">Koju React Weather App</h1>
      {/* <img src={logo} alt="logo"></img> */}
      <p className="text-white">{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Header;
