const extractOptions = data => {
  const options = [];
  data.data.map(item => {
    const campaign = {};
    const channel = {};
    campaign["label"] = item.campaign;
    channel["label"] = item.channel;
    options.push(campaign);
    options.push(channel);
    return options;
  });
  return options;
};
export default extractOptions;
