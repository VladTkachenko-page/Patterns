var Soccer = /** @class */ (function () {
    function Soccer() {
    }
    Soccer.prototype.play = function () {
        console.log('Play soccer with friends');
    };
    return Soccer;
}());
var Tennis = /** @class */ (function () {
    function Tennis() {
    }
    Tennis.prototype.play = function () {
        console.log('Play tennis with friends');
    };
    return Tennis;
}());
var Hockey = /** @class */ (function () {
    function Hockey() {
    }
    Hockey.prototype.play = function () {
        console.log('Play hockey with friends');
    };
    return Hockey;
}());
var Person = /** @class */ (function () {
    function Person(sport) {
        this.sport = sport;
    }
    Person.prototype.playSport = function () {
        this.sport.play();
    };
    return Person;
}());
var vlad = new Person(new Soccer());
vlad.playSport();
vlad = new Person(new Hockey());
vlad.playSport();
vlad = new Person(new Tennis());
vlad.playSport();
