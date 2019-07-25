import _ from "lodash";

const uniqueObjects = (campaign, channel) => {
  const uniqueCampaign = _.uniqWith(campaign, _.isEqual);
  const uniqeChannel = _.uniqWith(channel, _.isEqual);
  const selectSuggestions = _.concat(uniqeChannel, uniqueCampaign);
  return selectSuggestions;
};

export default uniqueObjects;
