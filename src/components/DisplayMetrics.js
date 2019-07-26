import React from "react";
import Select from "react-select";
import _ from "lodash";
import uniqueObjects from "../utils/uniqueObjects";
import MetricValue from "./MetricValue";


class DisplayMetrics extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      suggestionsForCampaign: [],
      suggestionsForChannel: [],
      clicks: 0,
      impressions: 0
    };
  }

  componentWillReceiveProps(props) {
    props.dataCSV.data.forEach((element, i) => {
      this.setState((state, props) => ({
        suggestionsForCampaign: [
          ...state.suggestionsForCampaign,
          { label: props.dataCSV.data[i].campaign }
        ],
        suggestionsForChannel: [
          ...state.suggestionsForChannel,
          { label: props.dataCSV.data[i].channel }
        ]
      }));
    });
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
    const selectSuggestions = uniqueObjects(
      this.state.suggestionsForCampaign,
      this.state.suggestionsForChannel
    );
    return (
      <div className="user-choice">
        <h3>{this.props.title}</h3>

        <Select
          className="select-field"
          options={selectSuggestions}
          placeholder=""
          onChange={this.calculateClicksAndImpressions}
        />
        <MetricValue label="Clicks: " value={numberOfClicks} />
        <MetricValue label="Impressions: " value={numberOfImpresions} />
      </div>
    );
  }
}

export default DisplayMetrics;
