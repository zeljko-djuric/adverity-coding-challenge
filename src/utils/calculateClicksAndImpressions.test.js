import calculateClicksAndImpressions from "./calculateClicksAndImpressions";
import { data, option1, option2, option3 } from "./testData";

it("calculateClicksAndImpressions test", () => {
  expect(calculateClicksAndImpressions(option1, data, "clicks")).toEqual(194);
  expect(calculateClicksAndImpressions(option1, data, "impressions")).toEqual(
    8901
  );
  expect(calculateClicksAndImpressions(option2, data, "clicks")).toEqual(3400);
  expect(calculateClicksAndImpressions(option2, data, "impressions")).toEqual(
    59007
  );
  expect(calculateClicksAndImpressions(option3, data, "clicks")).toEqual(1001);
  expect(calculateClicksAndImpressions(option2, data, "impressions")).toEqual(
    24980
  );
});
