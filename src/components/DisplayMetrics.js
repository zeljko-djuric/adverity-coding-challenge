import React from "react";
import Select from "react-select";
import _ from "lodash";
import extractOptions from "../utils/extractOptions";
class DisplayMetrics extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      options: [],
      clicks: 0,
      impressions: 0
    };
  }

  componentWillReceiveProps(props) {
    this.setState((state, props) => ({
      options: extractOptions(props.dataCSV)
    }));
  }

  calculateClicksAndImpressions = event => {
    const selectedSuggestion = event.label;
    const rawData = this.props.dataCSV.data;

    const clicksAndImpressions = _.filter(rawData, element => {
      if (
        _.isEqual(element.campaign, selectedSuggestion) ||
        _.isEqual(element.channel, selectedSuggestion)
      ) {
        return element;
      }
    });

    const totalClicks = _.sumBy(clicksAndImpressions, "clicks");
    const totalImpressions = _.sumBy(clicksAndImpressions, "impressions");

    // Another solution for calculating sum and clicks
    // const newCalculationClicks = _.sumBy(rawData, function(element) {
    //   if (
    //     element.campaign === selectedSuggestion ||
    //     element.channel === selectedSuggestion
    //   )
    //     return element.clicks;
    // });
    // console.log(newCalculationClicks);

    // const newCalculationImpressions = _.sumBy(rawData, function(element) {
    //   if (
    //     element.campaign === selectedSuggestion ||
    //     element.channel === selectedSuggestion
    //   )
    //     return element.impressions;
    // });
    // console.log(newCalculationImpressions);

    this.setState({
      clicks: totalClicks,
      impressions: totalImpressions
    });
  };

  render() {
    const numberOfClicks = this.state.clicks;
    const numberOfImpresions = this.state.impressions;
    const options = _.uniqWith(this.state.options, _.isEqual);
    return (
      <div className="user-choice">
        <h3>Choose channel or campaign:</h3>

        <Select
          className="select-field"
          options={options}
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
