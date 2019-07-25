import extractOptions from "./extractOptions";
import { data, eOptionsResult } from "./testData";

it("extract options test", () => {
  expect(extractOptions(data)).toEqual(eOptionsResult);
});
