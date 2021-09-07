class Bysicle {
  go(): void {
      console.log("Bysicle go");
  }
  stop(): void {
    console.log("Bysicle stop");
  }
}

interface Command {
  execute(): void;
}

class BysicleGoCommand implements Command {
  bysicle: Bysicle;

  constructor(bysicle: Bysicle) {
      this.bysicle = bysicle;
  }

  execute(): void {
      this.bysicle.go()
  }
}

class BysicleStopCommand implements Command {
  bysicle: Bysicle;

  constructor(bysicle: Bysicle) {
      this.bysicle = bysicle;
  }

  execute(): void {
      this.bysicle.stop()
  }
}

class Invoker {
  command: Command;

  setCommand(command: Command) {
    this.command = command;
  }

}

const bysicle = new Bysicle();
const bysicleGoCommand = new BysicleGoCommand(bysicle);
const bysicleStopCommand = new BysicleStopCommand(bysicle);
const invoker = new Invoker();

invoker.setCommand(bysicleGoCommand);
invoker.command.execute();
invoker.setCommand(bysicleStopCommand);
invoker.command.execute();

