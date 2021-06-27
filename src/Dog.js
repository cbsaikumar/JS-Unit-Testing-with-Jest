import Animal from "./Animal";

export default class Dog extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  isRunning() {
    if (this.speed) {
      return true;
    }
    return false;
  }
}
