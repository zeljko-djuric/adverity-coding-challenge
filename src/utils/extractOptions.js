// @flow
import _ from "lodash";

type Props = {
  data: Object<{
    data: Array,
    errors: Object,
    meta: Object
  }>,
};

const extractOptions = ({data}: Props) => {
  const options = _.map(
    _.flatMap(data, item => [item.campaign, item.channel]),
    item => ({
      label: item
    })
  );
  return _.uniqBy(options, "label");
};
export default extractOptions;
