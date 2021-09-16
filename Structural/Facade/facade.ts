class Computer {
  Loading(): void {
    console.log('Loading..')
  }
  Ready(): void {
    console.log('Ready to be used!');
  }
  Shutdown(): void {
    console.log('Shutdown...');
  }
  powerOff(): void {
    console.log('No power');
  }
}
class Mouse {
  launchLight(): void {
      console.log('Light on');
  }
  noPower(): void {
      console.log('No power');
  }
}

class Keyboard {
  launchLight(): void {
      console.log('Light key on');
  }
  noPower(): void {
      console.log('No power');
  }
}

class ComputerFacade {
  computer: Computer;
  mouse: Mouse;
  keyboard: Keyboard;

  constructor (computer: Computer, mouse: Mouse, keyboard: Keyboard) {
    this.computer = computer
    this.mouse = mouse
    this.keyboard = keyboard
  }

  turnOn(): void {
    this.computer.Loading();
    this.mouse.launchLight();
    this.keyboard.launchLight();
    this.computer.Ready();
  }
  turnOff(): void {
    this.computer.Shutdown();
    this.computer.powerOff();
    this.mouse.noPower();
    this.keyboard.noPower();
  }
}

const computer = new ComputerFacade(new Computer(), new Mouse(), new Keyboard());
computer.turnOn() 
computer.turnOff()