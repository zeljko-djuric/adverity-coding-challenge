import _ from "lodash";

const calculateImpressions = (campaignOrChannel, data) => {
  const rawData = data.data;
  const impressions = _.filter(rawData, element => {
    if (
      _.isEqual(element.campaign, campaignOrChannel) ||
      _.isEqual(element.channel, campaignOrChannel)
    ) {
      return element;
    }
  });
  const totalImpressions = _.sumBy(impressions, "impressions");
  return totalImpressions;
};

export default calculateImpressions;
