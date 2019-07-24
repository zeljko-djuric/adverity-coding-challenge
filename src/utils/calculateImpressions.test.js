import calculateImpressions from "./calculateImpressions";
import { data, option1, option2, option3 } from "./testData";

it("calculate impressions test", () => {
  expect(calculateImpressions(option1, data)).toEqual(8901);
  expect(calculateImpressions(option2, data)).toEqual(59007);
  expect(calculateImpressions(option3, data)).toEqual(24980);
});
