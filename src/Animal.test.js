import Animal from "./Animal";

describe("Animal methods", () => {
  let animal;
  beforeEach(() => {
    animal = new Animal("some name");
  });

  it("It should have working instance", () => {
    expect(animal).toBeInstanceOf(Animal);
  });
  it("It should have zero speed with initial name set when instance created", () => {
    expect(animal.speed).toEqual(0);
    expect(animal.name).toEqual("some name");
  });
  it("It should have speed after calling function run with status string", () => {
    animal.run(100);
    expect(animal.speed).toEqual(100);
    expect(animal.status).toEqual(`some name runs with speed 100.`);
  });
  it("It should stop animal once stop is being call with proper status", () => {
    animal.stop();
    expect(animal.speed).toEqual(0);
    expect(animal.status).toEqual(`some name stands still.`);
  });
});
