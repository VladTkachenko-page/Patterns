var Publisher = /** @class */ (function () {
    function Publisher() {
        this.observers = [];
    }
    Publisher.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    Publisher.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.notify();
        }
    };
    Publisher.prototype.addPublication = function (id) {
        this.id = id;
        this.notify();
    };
    return Publisher;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver() {
    }
    ConcreteObserver.prototype.notify = function () {
        console.log('Reacted to the publication.');
    };
    return ConcreteObserver;
}());
var subject = new Publisher();
var observer1 = new ConcreteObserver();
var observer2 = new ConcreteObserver();
subject.register(observer1);
subject.register(observer2);
subject.addPublication(1);
