interface Bysicle {
  getDescription(): string;
}

class StandardBysicle implements Bysicle {
  getDescription() {
    return 'Bysicle with bell, basket';
  }
}

class Decorator implements Bysicle {
  protected bysicle: Bysicle;

  constructor(bysicle: Bysicle) {
      this.bysicle = bysicle;
  }

  public getDescription(): string {
      return this.bysicle.getDescription();
  }
}

class SportBysicle extends Decorator {
  public getDescription(): string {
    return `${this.bysicle.getDescription()}, GPS, Speedometr`;
    
  }
}
class ElectroBysicle extends Decorator {
  public getDescription(): string {
    return `${this.bysicle.getDescription()}, electroengine `;
    
  }
}

const bysicle = new StandardBysicle();
const decorator1 = new SportBysicle(bysicle);
const decorator2 = new ElectroBysicle(bysicle);
const decorator3 = new ElectroBysicle(decorator1);
console.log(decorator1.getDescription());
console.log(decorator2.getDescription());
console.log(decorator3.getDescription());