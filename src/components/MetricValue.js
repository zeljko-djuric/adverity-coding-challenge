// @flow
import React from "react";

type Props = {
  label: string,
  value: number
};

const MetricValue = ({ label, value }: Props) => (
  <div>
    <label>{label}</label>
    <span className="metric-value">{value}</span>
  </div>
);

export default MetricValue;
