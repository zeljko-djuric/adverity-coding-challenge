import React from "react";
import Select from "react-select";
import _ from "lodash";
import calculateClicks from "../utils/calculateClicks";
import calculateImpressions from "../utils/calculateImpressions";

class DisplayMetrics extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      suggestions: [],
      clicks: 0,
      impressions: 0,
      campaignOrChannel: ""
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

  getCampaignOrChannel = event => {
    this.setState({
      campaignOrChannel: event.label
    });
  };

  render() {
    const data = this.props.dataCSV.data;
    const campaignOrChannel = this.state.campaignOrChannel;
    const numberOfClicks = calculateClicks(campaignOrChannel, data);
    const numberOfImpresions = calculateImpressions(campaignOrChannel, data);
    const selectSuggestions = _.uniqWith(this.state.suggestions, _.isEqual);
    return (
      <div className="user-choice">
        <h3>Choose channel or campaign:</h3>

        <Select
          className="select-field"
          options={selectSuggestions}
          placeholder=""
          onChange={event => this.getCampaignOrChannel(event)}
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
