var Bysicle = /** @class */ (function () {
    function Bysicle() {
    }
    Bysicle.prototype.go = function () {
        console.log("Bysicle go");
    };
    Bysicle.prototype.stop = function () {
        console.log("Bysicle stop");
    };
    return Bysicle;
}());
var BysicleGoCommand = /** @class */ (function () {
    function BysicleGoCommand(bysicle) {
        this.bysicle = bysicle;
    }
    BysicleGoCommand.prototype.execute = function () {
        this.bysicle.go();
    };
    return BysicleGoCommand;
}());
var BysicleStopCommand = /** @class */ (function () {
    function BysicleStopCommand(bysicle) {
        this.bysicle = bysicle;
    }
    BysicleStopCommand.prototype.execute = function () {
        this.bysicle.stop();
    };
    return BysicleStopCommand;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setCommand = function (command) {
        this.command = command;
    };
    return Invoker;
}());
var bysicle = new Bysicle();
var bysicleGoCommand = new BysicleGoCommand(bysicle);
var bysicleStopCommand = new BysicleStopCommand(bysicle);
var invoker = new Invoker();
invoker.setCommand(bysicleGoCommand);
invoker.command.execute();
invoker.setCommand(bysicleStopCommand);
invoker.command.execute();
console.log('invoker: ', invoker);
