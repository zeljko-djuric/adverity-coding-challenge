import _ from "lodash";

const calculateClicksAndImpressions = (campaignOrChannel, data, metricName) => {
  const receivedData = data;
  const metricValue = _.filter(receivedData, element => {
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
