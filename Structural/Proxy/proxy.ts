interface IDoor {
  open(password?:number): void;
  close(): void;
}

class Door implements IDoor{
  open(): void {
    console.log('Opening door');
  }

  close(): void {
      console.log('Closing the door')
  }
}

class CodePanel implements IDoor {
  protected door: Door;
  protected doorOpen: boolean = false;

  constructor(door: Door) {
    this.door = door
  }

  open(password:number): void {
    if (this.authenticate(password)) {
        this.door.open()
        this.doorOpen = true;
    } else {
        console.log('Wrong code')
    }
  }

  authenticate(password: number) {
      return password === 1111
  }

  close() {
     if (this.doorOpen) {
       this.door.close()
       this.doorOpen = false;
     } 
  }
}

const door = new CodePanel(new Door())
door.open(1121);
door.open(1111);
door.close();
