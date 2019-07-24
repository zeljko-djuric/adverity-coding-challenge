import calculateClicks from "./calculateClicks";
import { data, option1, option2, option3 } from "./testData";

it("calculate clicks test", () => {
  expect(calculateClicks(option1, data)).toEqual(194);
  expect(calculateClicks(option2, data)).toEqual(3400);
  expect(calculateClicks(option3, data)).toEqual(1001);
});
