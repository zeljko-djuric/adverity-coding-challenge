import React from "react";

const Header = props => (
  <div className="header">
    <img className="header_img" src={props.ImageUrl} alt="Logo" />
  </div>
);

export default Header;
