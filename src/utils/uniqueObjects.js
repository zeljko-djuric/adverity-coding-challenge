import _ from "lodash";

const uniqueObjects = (campaign, channel) =>
  _.concat(_.uniqBy(campaign, "label"), _.uniqBy(channel, "label"));

export default uniqueObjects;
