import Dog from "./Dog";

describe("Test Dog methods", () => {
  let dog;
  beforeEach(() => {
    dog = new Dog("puppy");
  });

  it("It should have working instance", () => {
    expect(dog).toBeInstanceOf(Dog);
  });
  it("It should have all the features and functions of Parent class", () => {
    expect(dog.name).toEqual("puppy");
    dog.run(200);
    expect(dog.speed).toEqual(200);
    expect(dog.status).toEqual("puppy runs with speed 200.");
    dog.stop();
    expect(dog.speed).toEqual(0);
    expect(dog.status).toEqual("puppy stands still.");
  });
  it("It should have status check if animal is running or not after calling isRunning", () => {
    expect(dog.isRunning()).toBeFalsy();
    dog.run(50);
    expect(dog.isRunning()).toBeTruthy();
    dog.hide();
    expect(dog.isRunning()).toBeTruthy();
  });
});
