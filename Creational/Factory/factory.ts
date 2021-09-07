interface IFBysicle {
  createModification(): string
}

class StandardBysicle implements IFBysicle {
  createModification() {
    return 'create standard bysicle modification'
  }
}

class SportBysicle implements IFBysicle {
  createModification() {
    return 'create sport bysicle modification'
  }
}

abstract class Factory {
  abstract create(name: string): IFBysicle;
}

class FactoryBysicle extends Factory{
  create(name: string): IFBysicle{
    switch (name) {
      case "simple": 
      return new StandardBysicle();
      case "sport": 
      return new SportBysicle();
      default: 
      return new StandardBysicle();
    }
  }
}

const factory = new FactoryBysicle();

console.log(factory.create('sport').createModification());
console.log(factory.create('simple').createModification());