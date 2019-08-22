import _ from "lodash";

const extractOptions = data => {
  const options = [];
  _.flatMap(data.data, item => {
    const campaign = {};
    const channel = {};
    campaign["label"] = item.campaign;
    channel["label"] = item.channel;
    options.push(campaign);
    options.push(channel);
    return options;
  });
  console.log(options);
  return _.uniqBy(options, "label");
};
export default extractOptions;
