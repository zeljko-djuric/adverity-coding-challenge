import React from "react";

const MetricValue = props => (
  <div>
    <label>{props.labelOneText}</label>
    <span className="left-metric-value">{props.numberOfClicks}</span>
    <label>{props.labelTwoText}</label>
    <span className="right-metric-value">{props.numberOfImpresions}</span>
  </div>
);

export default MetricValue;
