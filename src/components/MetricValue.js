// @flow
import React from "react";

const MetricValue = ({ label, value }) => (
  <div>
    <label>{label}</label>
    <span className="metric-value">{value}</span>
  </div>
);

export default MetricValue;
