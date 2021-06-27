import Observer from "./Observer";

describe("Observer methods", () => {
  let observer;
  beforeEach(() => {
    observer = new Observer();
  });
  test("It should have working instance", () => {
    expect(observer).toBeInstanceOf(Observer);
  });
  test("It should have items and observers with length zero after creating instance", () => {
    expect(observer.observers.length).toEqual(0);
    expect(observer.items.length).toEqual(0);
  });
  test("It should call subscribe with a callback", () => {
    const func = jest.fn();
    observer.subscribe(func);
    observer.push(5);
    expect(func).toHaveBeenCalled();
    observer.pop();
    expect(func).toHaveBeenCalled();
  });
  test("It should have incremented length of subscribe once subscribe function is called", () => {
    const func = jest.fn();
    observer.subscribe(func);
    observer.push(5);
    expect(observer.items.length).toEqual(1);
  });
  test("It should have called push and pop to add or remove items", () => {
    const pushSpy = jest.spyOn(observer, "push");
    const popSpy = jest.spyOn(observer, "pop");
    observer.push(5);
    observer.pop();
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(popSpy).toHaveBeenCalledTimes(1);
  });
  test("Length of items should change on calling pup and pop", () => {
    observer.push(5);
    expect(observer.items.length).toEqual(1);
    observer.pop();
    expect(observer.items.length).not.toEqual(1);
  });
});
