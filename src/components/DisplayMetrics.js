import React from "react";
import Select from "react-select";
import _ from "lodash";

class DisplayMetrics extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      suggestions: [],
      clicks: 0,
      impressions: 0
    };
  }

  componentWillReceiveProps(props) {
    props.dataCSV.data.forEach((element, i) => {
      this.setState((state, props) => ({
        suggestions: [
          ...state.suggestions,
          { label: props.dataCSV.data[i].campaign },
          { label: props.dataCSV.data[i].channel }
        ]
      }));
    });
  }

  calculateClicksAndImpressions = event => {
    const selectedSuggestion = event.label;
    const rawData = this.props.dataCSV.data;
    const clicksAndImpressions = rawData.filter(element => {
      if (
        element.campaign === selectedSuggestion ||
        element.channel === selectedSuggestion
      ) {
        return element;
      }
    });

    const totalClicks = _.sumBy(clicksAndImpressions, "clicks");
    const totalImpressions = _.sumBy(clicksAndImpressions, "impressions");

    this.setState({
      clicks: totalClicks,
      impressions: totalImpressions
    });
  };

  render() {
    const numberOfClicks = this.state.clicks;
    const numberOfImpresions = this.state.impressions;
    const selectSuggestions = _.uniqWith(this.state.suggestions, _.isEqual);
    return (
      <div className="user-choice">
        <h3>Choose channel or campaign:</h3>

        <Select
          className="select-field"
          options={selectSuggestions}
          placeholder=""
          onChange={this.calculateClicksAndImpressions}
        />

        <label>Clicks: </label>
        <span className="clicks">{numberOfClicks}</span>
        <label>Impressions: </label>
        <span className="impressions">{numberOfImpresions}</span>
      </div>
    );
  }
}

export default DisplayMetrics;
