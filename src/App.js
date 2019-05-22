import React from "react";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Dashboard from "./components/Dashboard";
import Papa from "papaparse";
import axios from "axios";

class App extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      dataCSV: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.mocky.io/v2/5cd93aeb300000b721c014b0")
      .then(rawData => {
        const parserConfig = {
          delimiter: ",",
          header: true,
          dynamicTyping: true
        };

        this.setState({
          dataCSV: Papa.parse(rawData.data, parserConfig)
        });
      })
      .catch(function(error) {
        console.log("Error during axios get request:");
        console.log(error.response);
      });
  }

  render() {
    const dataCSV = this.state.dataCSV;

    return (
      <div>
        <Header />
        <Title />
        <Dashboard dataCSV={dataCSV} />
      </div>
    );
  }
}

export default App;
