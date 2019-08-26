// @flow
import _ from "lodash";

const calculateClicksAndImpressions = (campaignOrChannel, data, metricName) =>
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
