import { add, divide, multiply, subtract } from "./Calculator";

describe("Calculator methods", () => {
  test("It should call add function and return sum", () => {
    expect(add(4, 2)).toEqual(6);
  });
  test("It should call add function with wrong data and returns undefined", () => {
    expect(add(null, undefined)).toBeUndefined();
  });
  test("It should call subtract function and return output", () => {
    expect(subtract(5, 3)).toEqual(2);
  });
  test("It should call subtract function with wrong data and returns undefined", () => {
    expect(subtract(5, "hello")).toBeUndefined();
  });
  test("It should call multiply function and return output", () => {
    expect(multiply(2, 3)).toEqual(6);
  });
  test("It should call multiply function with wrong data and returns undefined", () => {
    expect(multiply(5, "hello")).toBeUndefined();
  });
  test("It should call divide function and return sum", () => {
    expect(divide(44, 11)).toEqual(4);
  });
});
