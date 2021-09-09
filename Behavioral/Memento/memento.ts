class Originator {
  private text: string;

  constructor(text: string) {
      this.text = text;
  }
  public addText(char: string): void {
    this.text = this.text + char;
    console.log('Change: ', this.text);
  } 
  public save(): Memento {
    console.log('Save');
    return new ConcreteMemento(this.text);
  }
  public restore(memento: Memento): void {
    this.text = memento.getText();
    console.log(`Undo: ${this.text}`);
  }
}

interface Memento {
  getText(): string;
}

class ConcreteMemento implements Memento {
  private text: string;


  constructor(text: string) {
      this.text = text;
  }

  public getText(): string {
      return this.text;
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
      this.originator = originator;
  }

  public backup(): void {
      this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
        return;
    }
    const memento = this.mementos.pop();
    this.originator.restore(memento);
}

}

const originator = new Originator('fsdafsdgasgf');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.addText('iiiiiii');
caretaker.backup();
originator.addText('00000000000');
caretaker.undo();
caretaker.undo();