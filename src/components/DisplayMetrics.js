// @flow
import React, { useState } from "react";
import Select from "react-select";
import calculateClicksAndImpressions from "../utils/calculateClicksAndImpressions";
import MetricValue from "./MetricValue";
import extractOptions from "../utils/extractOptions";
import type { ReceivedData } from "../types/ReceivedData";

type Props = {
  data: ReceivedData,
  title: string
};

const DisplayMetrics = ({ data, title }: Props) => {
  const [campaignOrChannel, setCampaignOrChannel] = useState("");

  const getCampaignOrChannel = event => {
    setCampaignOrChannel(event.label);
  };
  const numberOfClicks = calculateClicksAndImpressions(
    campaignOrChannel,
    data.data,
    "clicks"
  );
  const numberOfImpresions = calculateClicksAndImpressions(
    campaignOrChannel,
    data.data,
    "impressions"
  );
  const options = extractOptions(data);
  return (
    <div className="user-choice">
      <h3>{title}</h3>

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
