// @flow
import React from "react";

type Props = {
  ImageUrl: string
};

const Header = (props: Props) => (
  <div className="header">
    <img className="header_img" src={props.ImageUrl} alt="Logo" />
  </div>
);

export default Header;
