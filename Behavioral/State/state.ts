interface State {
  handle(flashlight: Flashlight): void;
}

class FlashlightOn implements State {
  handle(flashlight: Flashlight): void {
    console.log("Flashlight on");
    flashlight.state = new FlashlightBlink();
  }
}

class FlashlightBlink implements State {
  handle(flashlight: Flashlight): void {
    console.log("Flashlight blink");
    flashlight.state = new FlashlightOff();
  }
}

class FlashlightOff implements State {
  handle(flashlight: Flashlight): void {
    console.log("Flashlight off");
    flashlight.state = new FlashlightOn();
  }
}

class Flashlight {
  state: State;

  constructor(state: State) {
    this.state = state;
  }
  
  request(): void {
    this.state.handle(this);
  } 
}
const flashlight = new Flashlight(new FlashlightOn());
flashlight.request();
flashlight.request();
flashlight.request();