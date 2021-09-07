var FactoryOldBysicle = /** @class */ (function () {
    function FactoryOldBysicle() {
    }
    FactoryOldBysicle.prototype.createBysicle = function () {
        return new OldBysicle();
    };
    FactoryOldBysicle.prototype.createSportBysicle = function () {
        return new OldSportBysicle();
    };
    return FactoryOldBysicle;
}());
var FactoryNewBysicle = /** @class */ (function () {
    function FactoryNewBysicle() {
    }
    FactoryNewBysicle.prototype.createBysicle = function () {
        return new NewBysicle();
    };
    FactoryNewBysicle.prototype.createSportBysicle = function () {
        return new NewSportBysicle();
    };
    return FactoryNewBysicle;
}());
var OldBysicle = /** @class */ (function () {
    function OldBysicle() {
    }
    OldBysicle.prototype.addModification = function () {
        return 'create bysicle with old modification';
    };
    return OldBysicle;
}());
var NewBysicle = /** @class */ (function () {
    function NewBysicle() {
    }
    NewBysicle.prototype.addModification = function () {
        return 'create bysicle with new modification';
    };
    return NewBysicle;
}());
var OldSportBysicle = /** @class */ (function () {
    function OldSportBysicle() {
    }
    OldSportBysicle.prototype.addModification = function () {
        return 'create sport bysicle with old modification';
    };
    return OldSportBysicle;
}());
var NewSportBysicle = /** @class */ (function () {
    function NewSportBysicle() {
    }
    NewSportBysicle.prototype.addModification = function () {
        return 'create sport bysicle with new modification';
    };
    return NewSportBysicle;
}());
var factory = new FactoryOldBysicle();
var factory2 = new FactoryNewBysicle();
console.log(factory.createBysicle().addModification());
console.log(factory.createSportBysicle().addModification());
console.log(factory2.createBysicle().addModification());
console.log(factory2.createSportBysicle().addModification());
