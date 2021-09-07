var PrototypeBysicle = /** @class */ (function () {
    function PrototypeBysicle(name, color) {
        this.name = name;
        this.color = color;
    }
    PrototypeBysicle.prototype.clone = function () {
        var clone = new PrototypeBysicle(this.name, this.color);
        return clone;
    };
    return PrototypeBysicle;
}());
var bysicle1 = new PrototypeBysicle('BMX', 'black');
var bysicle2 = bysicle1.clone();
console.log('bysicle1: ', bysicle1);
console.log('bysicle2: ', bysicle2);
