import React, { useState } from "react";
import Select from "react-select";
import calculateClicksAndImpressions from "../utils/calculateClicksAndImpressions";
import MetricValue from "./MetricValue";
import extractOptions from "../utils/extractOptions";

const DisplayMetrics = props => {
  const [campaignOrChannel, setCampaignOrChannel] = useState("");

  const getCampaignOrChannel = event => {
    setCampaignOrChannel(event.label);
  };

  const data = props.data.data;
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
  const options = extractOptions(props.data);
  return (
    <div className="user-choice">
      <h3>{props.title}</h3>

      <Select
        className="select-field"
        options={options}
        placeholder=""
        onChange={event => getCampaignOrChannel(event)}
      />
      <MetricValue label="Clicks: " value={numberOfClicks} />
      <MetricValue label="Impressions: " value={numberOfImpresions} />
    </div>
  );
};

export default DisplayMetrics;
