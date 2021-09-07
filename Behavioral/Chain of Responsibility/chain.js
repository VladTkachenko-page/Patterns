var ChildBysicleHandler = /** @class */ (function () {
    function ChildBysicleHandler() {
    }
    ChildBysicleHandler.prototype.next = function (handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    };
    ChildBysicleHandler.prototype.handle = function (request) {
        if (request === 'child') {
            return 'create children bysicle';
        }
        return this.nextHandler.handle(request);
    };
    return ChildBysicleHandler;
}());
var BysicleHandler = /** @class */ (function () {
    function BysicleHandler() {
    }
    BysicleHandler.prototype.next = function (handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    };
    BysicleHandler.prototype.handle = function (request) {
        if (request === 'simple') {
            return 'create standard bysicle';
        }
        return this.nextHandler.handle(request);
    };
    return BysicleHandler;
}());
var SportBysicleHandler = /** @class */ (function () {
    function SportBysicleHandler() {
    }
    SportBysicleHandler.prototype.next = function (handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    };
    SportBysicleHandler.prototype.handle = function (request) {
        if (request === 'sport') {
            return 'create sport bysicle';
        }
        return this.nextHandler.handle(request);
    };
    return SportBysicleHandler;
}());
var child = new ChildBysicleHandler();
var simple = new BysicleHandler();
var sport = new SportBysicleHandler();
child.next(simple);
simple.next(sport);
console.log(simple.handle('sport'));
console.log(child.handle('child'));
