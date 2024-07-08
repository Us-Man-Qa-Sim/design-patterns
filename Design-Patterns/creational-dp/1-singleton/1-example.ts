/**
 * Definition:
 * Singleton design pattern is a creational design pattern that ensure that a class has only one instance,
 * while providing a global access point to this instance
 */

class Singleton {
  private static instance: Singleton;
  private static _count: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set count(value: number) {
    Singleton._count = value;
  }

  get count(): number {
    return Singleton._count;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
instance1.count = 5;
console.log(instance1.count);
console.log(instance2.count);
console.log(instance1 === instance2);
