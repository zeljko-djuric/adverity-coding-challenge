import React from "react";
import Select from "react-select";
import _ from "lodash";
import calculateClicksAndImpressions from "../utils/calculateClicksAndImpressions";
import uniqueObjects from "../utils/uniqueObjects";
import MetricValue from "./MetricValue";

class DisplayMetrics extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      suggestionsForCampaign: [],
      suggestionsForChannel: [],
      clicks: 0,
      impressions: 0,
      campaignOrChannel: ""
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

  getCampaignOrChannel = event => {
    this.setState({
      campaignOrChannel: event.label
    });
  };

  render() {
    const data = this.props.dataCSV.data;
    const campaignOrChannel = this.state.campaignOrChannel;
    const numberOfClicks = calculateClicksAndImpressions(
      campaignOrChannel,
      data,
      "clicks"
    );
    const numberOfImpresions = calculateClicksAndImpressions(
      campaignOrChannel,
      data,
      "impressions"
    );
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
          onChange={event => this.getCampaignOrChannel(event)}
        />
        <MetricValue label="Clicks: " value={numberOfClicks} />
        <MetricValue label="Impressions: " value={numberOfImpresions} />
      </div>
    );
  }
}

export default DisplayMetrics;
