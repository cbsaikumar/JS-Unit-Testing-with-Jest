import Questions from "./Questions";

describe("Should test Questions class methods", () => {
  let questions;
  beforeEach(() => {
    questions = new Questions();
  });

  test("It should have initializations when an instance is created", () => {
    expect(questions).toBeInstanceOf(Questions);
    expect(questions.questions).toBeDefined();
    expect(questions.questions).toHaveProperty("easy");
    expect(questions.questions).toHaveProperty("hard");
    expect(questions.counters).toBeDefined();
    expect(questions.counters).toHaveProperty("easy");
    expect(questions.counters).toHaveProperty("hard");
  });
  test("It should test getEasyQuestion method", () => {
    const easyQuestion = questions.getEasyQuestion();
    expect(easyQuestion.q).toEqual("value of 2+2?");
    expect(easyQuestion.a).toEqual(4);
    questions.getEasyQuestion();
    expect(questions.getEasyQuestion()).toBeNull;
  });
  test("It should test getHardQuestion method", () => {
    const hardQuestion = questions.getHardQuestion();
    expect(hardQuestion.q).toEqual("what is the diameter of earth?");
    expect(hardQuestion.a).toEqual("7,917.5 miles");
    expect(questions.getHardQuestion()).toBeNull;
  });
  test("It should test getQuestion method", () => {
    const easyQuestionSpy = jest.spyOn(questions, "getEasyQuestion");
    const hardQuestionSpy = jest.spyOn(questions, "getHardQuestion");

    const easyQuestion = questions.getQuestion("easy");
    expect(easyQuestion).toHaveProperty("q");
    expect(easyQuestion).toHaveProperty("a");
    expect(easyQuestionSpy).toHaveBeenCalledTimes(1);
    const hardQuestion = questions.getQuestion("hard");
    expect(hardQuestion).toHaveProperty("q");
    expect(hardQuestion).toHaveProperty("a");
    expect(hardQuestionSpy).toHaveBeenCalledTimes(1);

    const question = questions.getQuestion();
    expect(question.q).toEqual("number of sides of a triangle?");
    expect(question.a).toEqual(3);
    expect(easyQuestionSpy).toHaveBeenCalledTimes(2);
    expect(hardQuestionSpy).toHaveBeenCalledTimes(1);
    questions.getEasyQuestion();
    questions.getEasyQuestion();
    questions.getHardQuestion();
    questions.getHardQuestion();
    expect(easyQuestionSpy).toHaveBeenCalledTimes(4);
    expect(hardQuestionSpy).toHaveBeenCalledTimes(3);
  });
});
