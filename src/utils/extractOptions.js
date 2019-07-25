const extractOptions = data => {
  var options = [];
  data.data.map(item => {
    var campaign = {};
    var channel = {};
    campaign["label"] = item.campaign;
    channel["label"] = item.channel;
    options.push(campaign);
    options.push(channel);
    return options;
  });
  return options;
};
export default extractOptions;
