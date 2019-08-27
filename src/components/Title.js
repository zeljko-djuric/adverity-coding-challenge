import React from "react";

type Props = {
  title: string,
  description: string
};

const Title = ({ title, description }: Props) => (
  <div className="tittle-box">
    <h1 className="tittle-box_tittle">{title}</h1>
    <p className="tittle-box_description">{description}</p>
  </div>
);

export default Title;
