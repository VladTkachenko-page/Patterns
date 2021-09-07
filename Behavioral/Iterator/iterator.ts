interface Iterator {
  next(): any;
  hasNext(): boolean;
}

interface IterableCollection {
  createIterator(): Iterator;
}

class ArrayIterator implements Iterator {
  private collection: any[] = [];
  private index: number = 0;

  constructor(collection: any[]) {
      this.collection = collection;
  }

  public next(): any {
      return this.collection[this.index++];
  }

  public hasNext(): boolean {
      return this.index < this.collection.length;
  }
}

class NumbersCollection implements IterableCollection {
  private items: number[] = [];

  constructor(items: number[]) {
      this.items = items;
  }
  public createIterator(): Iterator {
      return new ArrayIterator(this.items);
  }
}

const numbers = new NumbersCollection([1, 4, 6, 8, 10, 15])
const iterator = numbers.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
 