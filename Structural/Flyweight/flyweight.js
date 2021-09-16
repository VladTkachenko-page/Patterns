var Bysicle = /** @class */ (function () {
    function Bysicle(type, color) {
        this.type = type;
        this.color = color;
    }
    return Bysicle;
}());
var BysicleFactory = /** @class */ (function () {
    function BysicleFactory() {
        this.bysicles = [];
        this.bysicles = [];
    }
    BysicleFactory.prototype.createBysicle = function (type, color) {
        var bysicle = this.getBysicle(type);
        if (bysicle) {
            return bysicle;
        }
        else {
            var newBysicle = new Bysicle(type, color);
            this.bysicles.push(newBysicle);
            return newBysicle;
        }
    };
    BysicleFactory.prototype.getBysicle = function (type) {
        return this.bysicles.find(function (bysicle) { return bysicle.type === type; });
    };
    return BysicleFactory;
}());
var factory = new BysicleFactory();
var standardBysicle1 = factory.createBysicle('Standard Bysicle', 'red');
var standardBysicle2 = factory.createBysicle('Standard Bysicle', 'black');
var sportBysicle = factory.createBysicle('Sport Bysicle', 'black');
var childBysicle = factory.createBysicle('Child Bysicle', 'blue');
console.log(factory.bysicles);
