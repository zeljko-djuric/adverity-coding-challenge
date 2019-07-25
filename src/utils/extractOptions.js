const extractOptions = data => {
  let options = [];
  data.data.map(item => {
    let campaign = {};
    let channel = {};
    campaign["label"] = item.campaign;
    channel["label"] = item.channel;
    options.push(campaign);
    options.push(channel);
    return options;
  });
  return options;
};
export default extractOptions;
