interface Animal {
  accept(visitor: Visitor): void
}

class Cat implements Animal {
  voice(): void {
    console.log('Meow');
  }
  accept(visitor: Visitor): void {
    visitor.visit(this)
  }
}
class Dog implements Animal {
  voice(): void {
    console.log('Wouf');
  }
  accept(visitor: Visitor): void {
    visitor.visit(this)
  }
}

interface Visitor {
  visit(cat: Cat): void
  visit(dog: Dog): void
}


class voiceVisitor implements Visitor {
  visit(animal: Cat | Dog) {
    if (animal instanceof Cat) {
      cat.voice();
    }
    if (animal instanceof Dog) {
      dog.voice();
    }
  }
}

class feedVisitor implements Visitor {
  visit(animal: Cat | Dog) {
    if (animal instanceof Cat) {
      console.log('Feed the cat');

    }
    if (animal instanceof Dog) {
      console.log('Feed the dog');
    }
  }
}

const cat = new Cat();
const dog = new Dog();
const voice = new voiceVisitor();
const feed = new feedVisitor();
cat.accept(voice);
dog.accept(voice);
cat.accept(voice);
cat.accept(feed);