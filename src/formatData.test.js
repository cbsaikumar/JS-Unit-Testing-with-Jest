import formatData from "./formatData";

describe("Test formatData function", () => {
  test("should test validations", () => {
    expect(formatData()).toBeNull;
    expect(formatData("not array")).toBeNull;
    expect(formatData([])).toBeNull;
  });
  test("should test default initializations", () => {
    expect(formatData([{ name: "", value: null }])).toEqual([
      {
        name: "default name",
        value: 0,
      },
    ]);
  });

  test("should filter objects having value < 1000", () => {
    const data = [
      { name: "greater than 1000", value: 1001 },
      { name: "less than 1000", value: 999 },
      { name: "equal to 1000", value: 1000 },
    ];
    expect(formatData(data)).toEqual([
      {
        name: "less than 1000",
        value: 999,
      },
    ]);
  });
});
