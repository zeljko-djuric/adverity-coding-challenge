// @flow
import _ from "lodash";
import type { ReceivedData } from "../types/ReceivedData";

const calculateClicksAndImpressions = (
  campaignOrChannel: string,
  data: ReceivedData,
  metricName: string
) =>
  _.sumBy(
    _.filter(
      data,
      item =>
        _.isEqual(item.campaign, campaignOrChannel) ||
        _.isEqual(item.channel, campaignOrChannel)
    ),
    metricName
  );

export default calculateClicksAndImpressions;
