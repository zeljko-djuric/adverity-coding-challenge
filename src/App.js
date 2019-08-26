import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import DisplayMetrics from "./components/DisplayMetrics";
import Papa from "papaparse";
import axios from "axios";

const App = () => {
  const [dataCSV, setDataCSV] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5cd93aeb300000b721c014b0")
      .then(rawData => {
        const parserConfig = {
          delimiter: ",",
          header: true,
          dynamicTyping: true
        };
        setDataCSV(Papa.parse(rawData.data, parserConfig));
      });
  }, []);

  const title = "Programming Challenge";
  const description =
    "JavaScript: datastructures, typeAhead, groupBy / filter, aggregates";
  const ImageUrl = require("./img/logo.png");

  return (
    <div>
      <Header ImageUrl={ImageUrl} />
      <Title title={title} description={description} />
      <DisplayMetrics data={dataCSV} title="Choose channel or campaign:" />
    </div>
  );
};

export default App;
