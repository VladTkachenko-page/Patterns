interface Handler {
  next(handler:Handler): Handler
  handle(request:string): string
}

class ChildBysicleHandler implements Handler {
  nextHandler: Handler
  next(handler:Handler): Handler {
    this.nextHandler = handler;
    return this.nextHandler;
  }
  handle(request:string): string {
    if (request === 'child') {
      return 'create children bysicle'
    }
    return this.nextHandler.handle(request)
  }
}

class BysicleHandler implements Handler {
  nextHandler: Handler
  next(handler:Handler): Handler {
    this.nextHandler = handler;
    return this.nextHandler;
  }
  handle(request:string): string {
    if (request === 'simple') {
      return 'create standard bysicle'
    }
    return this.nextHandler.handle(request)
  }
}

class SportBysicleHandler implements Handler {
  nextHandler: Handler
  next(handler:Handler): Handler {
    this.nextHandler = handler;
    return this.nextHandler;
  }
  handle(request:string): string {
    if (request === 'sport') {
      return 'create sport bysicle'
    }
    return this.nextHandler.handle(request)
  }
}

const child = new ChildBysicleHandler();
const simple = new BysicleHandler();
const sport = new SportBysicleHandler();

child.next(simple);
simple.next(sport);

console.log(child.handle('sport'));