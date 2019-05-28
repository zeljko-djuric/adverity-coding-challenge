import React from "react";

const Title = props => (
  <div className="tittle-box">
    <h1 className="tittle-box_tittle">{props.title}</h1>
    <p className="tittle-box_description">{props.description}</p>
  </div>
);

export default Title;
