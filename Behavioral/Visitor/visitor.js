var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.voice = function () {
        console.log('Meow');
    };
    Cat.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.voice = function () {
        console.log('Wouf');
    };
    Dog.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return Dog;
}());
var voiceVisitor = /** @class */ (function () {
    function voiceVisitor() {
    }
    voiceVisitor.prototype.visit = function (animal) {
        if (animal instanceof Cat) {
            cat.voice();
        }
        if (animal instanceof Dog) {
            dog.voice();
        }
    };
    return voiceVisitor;
}());
var feedVisitor = /** @class */ (function () {
    function feedVisitor() {
    }
    feedVisitor.prototype.visit = function (animal) {
        if (animal instanceof Cat) {
            console.log('Feed the cat');
        }
        if (animal instanceof Dog) {
            console.log('Feed the dog');
        }
    };
    return feedVisitor;
}());
var cat = new Cat();
var dog = new Dog();
var voice = new voiceVisitor();
var feed = new feedVisitor();
cat.accept(voice);
dog.accept(voice);
cat.accept(voice);
cat.accept(feed);
