import Queue from "./Queue";

describe("Queue class methods", () => {
  let queue;
  let anotherQueue;
  beforeEach(() => {
    queue = new Queue();
  });
  test("It should have working instance", () => {
    expect(queue.data).toBeInstanceOf(Array);
  });
  test("It should have a length of zero on creation", () => {
    expect(queue.size()).toBe(0);
  });
  test("It should check if add function is being called ", () => {
    const spy = jest.spyOn(queue, "add");
    queue.add(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  test("It should have same length as many times add is being triggerd", () => {
    queue.add(2);
    queue.add(1);
    queue.add();
    expect(queue.size()).toBe(2);
  });
  test("It should remove what was added", () => {
    queue.add(2);
    queue.remove();
    expect(queue.size()).toBe(0);
  });
  test("It should check if remove function is being called when data is being removed", () => {
    const spy = jest.spyOn(queue, "remove");
    queue.add(1);
    queue.remove();
    queue.add(2);
    queue.remove();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  test("should test two instances should be distinct from each other", () => {
    expect(queue).not.toEqual(anotherQueue);
  });
});
