import React from "react";
import ReactDOM from "react-dom";
import MetricValue from "./MetricValue";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MetricValue />, div);
});
