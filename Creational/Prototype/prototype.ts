interface IPrototype {
  clone(): PrototypeBysicle;
}

class PrototypeBysicle implements IPrototype{
  public name: string;
  public color: string;

  constructor (name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  public clone(): PrototypeBysicle {
      const clone = new PrototypeBysicle (this.name, this.color);
      return clone;
  }
}

const bysicle1 = new PrototypeBysicle('BMX', 'black');
const bysicle2 = bysicle1.clone();
console.log('bysicle1: ', bysicle1);
console.log('bysicle2: ', bysicle2);
