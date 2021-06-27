import Results from "./Results";

describe("Test Results methods", () => {
  let results;
  beforeEach(() => {
    results = new Results();
  });
  test("should test getTopScore method", () => {
    expect(results.getTopScore()).toEqual(10);
  });
  test("should test getTopScore method with invalid data", () => {
    results.setData(100);
    expect(() => results.getTopScore()).toThrow("data not set");
    results.setData([]);
    expect(() => results.getTopScore()).toThrow("data not set");
  });
  test("should test LeastScore method", () => {
    expect(results.getLeastScore()).toEqual(8);
  });
  test("should test getLeastScore method with invalid data", () => {
    results.setData(100);
    expect(() => results.getLeastScore()).toThrow("data not set");
    results.setData([]);
    expect(() => results.getLeastScore()).toThrow("data not set");
  });
});
