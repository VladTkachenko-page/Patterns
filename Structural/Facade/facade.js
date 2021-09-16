var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.Loading = function () {
        console.log('Loading..');
    };
    Computer.prototype.Ready = function () {
        console.log('Ready to be used!');
    };
    Computer.prototype.Shutdown = function () {
        console.log('Shutdown...');
    };
    Computer.prototype.powerOff = function () {
        console.log('No power');
    };
    return Computer;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.launchLight = function () {
        console.log('Light on');
    };
    Mouse.prototype.noPower = function () {
        console.log('No power');
    };
    return Mouse;
}());
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.launchLight = function () {
        console.log('Light key on');
    };
    Keyboard.prototype.noPower = function () {
        console.log('No power');
    };
    return Keyboard;
}());
var ComputerFacade = /** @class */ (function () {
    function ComputerFacade(computer, mouse, keyboard) {
        this.computer = computer;
        this.mouse = mouse;
        this.keyboard = keyboard;
    }
    ComputerFacade.prototype.turnOn = function () {
        this.computer.Loading();
        this.mouse.launchLight();
        this.keyboard.launchLight();
        this.computer.Ready();
    };
    ComputerFacade.prototype.turnOff = function () {
        this.computer.Shutdown();
        this.computer.powerOff();
        this.mouse.noPower();
        this.keyboard.noPower();
    };
    return ComputerFacade;
}());
var computer = new ComputerFacade(new Computer(), new Mouse(), new Keyboard());
computer.turnOn();
computer.turnOff();
