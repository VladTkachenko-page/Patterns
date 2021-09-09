abstract class CarBuilder {
  addWheels(): void {
    console.log('Add 4 wheels');
  }
  build() {
    this.addWheels();
    this.addEngine();
    this.addFrame();
    this.addElectronic();
  }
  abstract addEngine(): void;
  abstract addFrame(): void;
  abstract addElectronic(): void;
}

class ElectroCar extends CarBuilder {
  addEngine(): void {
    console.log('Add electronic engine');
  }
  addFrame(): void {
    console.log('Add special frame for electocar');
  }
  addElectronic(): void {
    console.log('Add special electronic');
  }
}
class Car extends CarBuilder {
  addEngine(): void {
    console.log('Add engine');
  }
  addFrame(): void {
    console.log('Add frame');
  }
  addElectronic(): void {
    console.log('Add electronic');
  }
}

const electorCar = new ElectroCar();
electorCar.build();
const car = new Car();
electorCar.build();
