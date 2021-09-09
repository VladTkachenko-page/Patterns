interface IPublisher {
  register(observer: Observer): void;
  notify(): void;
}

class Publisher implements IPublisher {
  id: number;
  private observers: Observer[] = [];

  register(observer: Observer): void {
    this.observers.push(observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.notify();
    }
  }

  addPublication(id: number) {
    this.id = id;
    this.notify();
  }
}

interface Observer {
  notify(): void;
}

class ConcreteObserver implements Observer {
  notify(): void {
        console.log('Reacted to the publication.');
   }
}
const subject = new Publisher();

const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();
subject.register(observer1);
subject.register(observer2);
subject.addPublication(1);
