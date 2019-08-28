// @flow
import _ from "lodash";

const calculateClicksAndImpressions = (
  campaignOrChannel: string,
  data: Object<{
    data: Array,
    errors: Object,
    meta: Object
  }>,
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
