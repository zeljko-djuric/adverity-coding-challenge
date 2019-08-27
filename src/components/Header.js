// @flow
import React from "react";

type Props = {
  imageUrl: string
};

const Header = ({ imageUrl }: Props) => (
  <div className="header">
    <img className="header_img" src={imageUrl} alt="Logo" />
  </div>
);

export default Header;
