import React from "react";


const Menu = ({showHome}) => {
  return (
    <div className="menu-background menu-content flex-col">
      <p id="menu-1" className="menu" style={{ cursor: "pointer" }}>
        <span onClick={showHome}>Home</span>
      </p>
      <p id="menu-1" className="menu" style={{ cursor: "pointer" }}>
			<span onClick={showHome} >About</span>
      </p>
    </div>
  );
};

export default Menu;
