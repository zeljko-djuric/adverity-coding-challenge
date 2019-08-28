// @flow
import _ from "lodash";
import type { ReceivedData } from "../types/ReceivedData";

type Props = {
  data: ReceivedData
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
