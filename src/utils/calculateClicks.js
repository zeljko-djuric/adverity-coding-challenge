import _ from "lodash";

const calculateClicks = (campaignOrChannel, data) => {
  const rawData = data.data;
  const clicks = _.filter(rawData, element => {
    if (
      _.isEqual(element.campaign, campaignOrChannel) ||
      _.isEqual(element.channel, campaignOrChannel)
    ) {
      return element;
    }
  });
  const totalClicks = _.sumBy(clicks, "clicks");
  return totalClicks;
};

export default calculateClicks;
