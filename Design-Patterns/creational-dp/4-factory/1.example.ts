abstract class Car {
  constructor(public type: string, public name: string, public modal: string) {}

  abstract getCarInfo(name: string, modal: string): void;
}

class SUV extends Car {
  public getCarInfo(): void {
    console.log(`Car is ${this.name} and modal is ${this.modal}`);
  }
}
class Tayota extends Car {
  public getCarInfo(): void {
    console.log(`Car is ${this.name} and modal is ${this.modal}`);
  }
}
class Suzuki extends Car {
  public getCarInfo(): void {
    console.log(`Car is ${this.name} and modal is ${this.modal}`);
  }
}

class Factory {
  createCar(type: "suv" | "tayota" | "suzuki", name: string, modal: string) {
    switch (type) {
      case "suv":
        return new SUV(type, name, modal);

      case "tayota":
        return new Tayota(type, name, modal);

      case "suzuki":
        return new Suzuki(type, name, modal);

      default:
        throw new Error("Invalid car type");
    }
  }
}

const factory = new Factory();
const suv = factory.createCar("suv", "1122", "E1");
suv.getCarInfo();

const tayota = factory.createCar("tayota", "Tayota A1", "E1232");
tayota.getCarInfo();

const suzuki = factory.createCar("suzuki", "Sazuki-Etron", "2021");
suzuki.getCarInfo();
