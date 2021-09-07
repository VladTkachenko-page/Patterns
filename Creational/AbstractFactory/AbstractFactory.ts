interface IAbstractFactory {
  createBysicle(): IBysicle;
  createSportBysicle(): ISportBysicle;
}
class FactoryOldBysicle implements IAbstractFactory{
  createBysicle() {
    return new OldBysicle()
  }
  createSportBysicle() {
    return new OldSportBysicle()
  }
}
class FactoryNewBysicle implements IAbstractFactory{
  createBysicle() {
    return new NewBysicle()
  }
  createSportBysicle() {
    return new NewSportBysicle()
  }
}

interface IBysicle {
  addModification(): string
}
class OldBysicle implements IBysicle{
  addModification() {
    return 'create bysicle with old modification'
  }
}
class NewBysicle implements IBysicle{
  addModification() {
    return 'create bysicle with new modification'
  }
}

interface ISportBysicle {
  addModification(): string
}
class OldSportBysicle implements ISportBysicle{
  addModification() {
    return 'create sport bysicle with old modification'
  }
}
class NewSportBysicle implements ISportBysicle{
  addModification() {
    return 'create sport bysicle with new modification'
  }
}

const abstractFactory = new FactoryOldBysicle();
const abstractFactory2 = new FactoryNewBysicle();

console.log(abstractFactory.createBysicle().addModification());
console.log(abstractFactory.createSportBysicle().addModification());

console.log(abstractFactory2.createBysicle().addModification());
console.log(abstractFactory2.createSportBysicle().addModification());