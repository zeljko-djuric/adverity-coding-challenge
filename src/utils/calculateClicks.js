import _ from "lodash";

const calculateClicks = (campaignOrChannel, data) => {
  const receivedData = data;
  const clicks = _.filter(receivedData, element => {
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
