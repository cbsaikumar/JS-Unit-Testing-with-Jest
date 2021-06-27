export const add = (x, y) => isValidData(x, y) && x + y;
export const subtract = (x, y) => isValidData(x, y) && x - y;
export const multiply = (x, y) => isValidData(x, y) && x * y;
export const divide = (x, y) => isValidData(x, y) && x / y;

const isValidData = (x, y) =>
  typeof x !== "number" || typeof y !== "number" ? undefined : true;
