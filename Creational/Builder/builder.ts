class Bysicle {
}


interface IBuilder {
  setName(name: string): void;
  setBell(bell: boolean): void;
  setBasket(basket: boolean): void;
} 

class BuildBysicle implements IBuilder{
  private bysicle: Bysicle;

  constructor() {
    this.bysicle = new Bysicle();
  }
  setName(name: string) {
    this.bysicle.name = name;
  }
  setBell(bell: boolean) {
    this.bysicle.bell = bell;
  }
  setBasket(basket: boolean) {
    this.bysicle.basket = basket;
  }
  getProduct() {
    const result = this.bysicle;
    return result;
  }
}


const standardBysicle = new BuildBysicle();
standardBysicle.setName('Standard bysicle');
standardBysicle.setBell(true);
standardBysicle.setBasket(true);
standardBysicle.getProduct();
console.log(standardBysicle);

