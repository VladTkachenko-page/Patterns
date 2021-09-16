class Bysicle {
  type: string;
  color: string;

  constructor(type: string, color: string) {
      this.type = type;
      this.color = color;
  }
}

class BysicleFactory {
  bysicles: Bysicle[] = []
  constructor() {
      this.bysicles = [];
  }

  createBysicle(type: string, color: string) {
      let bysicle = this.getBysicle(type);
      if (bysicle) {
          return bysicle;
      } else {
          const newBysicle = new Bysicle(type, color);
          this.bysicles.push(newBysicle);
          return newBysicle;
      }
  }

  getBysicle(type: string) {
      return this.bysicles.find(bysicle => bysicle.type === type);
  }
}

const factory = new BysicleFactory();

const standardBysicle1 = factory.createBysicle('Standard Bysicle', 'red');
const standardBysicle2 = factory.createBysicle('Standard Bysicle', 'black');
const sportBysicle = factory.createBysicle('Sport Bysicle', 'black');
const childBysicle = factory.createBysicle('Child Bysicle', 'blue');

console.log(factory.bysicles);