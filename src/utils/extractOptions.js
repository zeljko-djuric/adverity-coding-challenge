import _ from "lodash";

const extractOptions = data => {
  const options = _.map(
    _.flatMap(data.data, item => [item.campaign, item.channel]),
    item => ({
      label: item
    })
  );
  return _.uniqBy(options, "label");
};
export default extractOptions;
