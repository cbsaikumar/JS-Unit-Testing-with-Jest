import rockPaperScissors from "./rockPaperScissors";

describe("Test rockPaperScissors function", () => {
  test("It should validate to TIE", () => {
    expect(rockPaperScissors("rock", "rock")).toBe(0); // TIE
    expect(rockPaperScissors("scissors", "scissors")).toBe(0); // TIE
    expect(rockPaperScissors("paper", "paper")).toBe(0); // TIE
  });
  test("It should player2 and player1 win", () => {
    expect(rockPaperScissors("rock", "paper")).toBe(2);
    expect(rockPaperScissors("paper", "rock")).toBe(1);
  });
  test("It should player2 and player1 win", () => {
    expect(rockPaperScissors("paper", "scissors")).toBe(2);
    expect(rockPaperScissors("scissors", "paper")).toBe(1);
  });
  test("It should player2 and player1 win", () => {
    expect(rockPaperScissors("scissors", "rock")).toBe(2);
    expect(rockPaperScissors("rock", "scissors")).toBe(1);
  });
});
