import React from "react";
import Select from "react-select";
import calculateClicksAndImpressions from "../utils/calculateClicksAndImpressions";
import MetricValue from "./MetricValue";
import extractOptions from "../utils/extractOptions";

class DisplayMetrics extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      clicks: 0,
      impressions: 0,
      campaignOrChannel: ""
    };
  }

  getCampaignOrChannel = event => {
    this.setState({
      campaignOrChannel: event.label
    });
  };

  render() {
    const data = this.props.data.data;
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
    const selectSuggestions = extractOptions(this.props.data);
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
