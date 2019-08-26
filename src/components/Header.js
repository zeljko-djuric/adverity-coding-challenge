// @flow
import React from "react";

type HeaderProp = {
  ImageUrl: string
};

const Header = (props: HeaderProp) => (
  <div className="header">
    <img className="header_img" src={props.ImageUrl} alt="Logo" />
  </div>
);

export default Header;
