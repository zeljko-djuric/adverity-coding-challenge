import _ from "lodash";

const calculateClicksAndImpressions = (campaignOrChannel, data, metricName) => {
  const metricValue = _.filter(data, element => {
    if (
      _.isEqual(element.campaign, campaignOrChannel) ||
      _.isEqual(element.channel, campaignOrChannel)
    ) {
      return element;
    }
  });
  const totalSum = _.sumBy(metricValue, metricName);
  return totalSum;
};

export default calculateClicksAndImpressions;
