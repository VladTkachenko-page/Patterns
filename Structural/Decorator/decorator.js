var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StandardBysicle = /** @class */ (function () {
    function StandardBysicle() {
    }
    StandardBysicle.prototype.getDescription = function () {
        return 'Bysicle with bell, basket';
    };
    return StandardBysicle;
}());
var Decorator = /** @class */ (function () {
    function Decorator(bysicle) {
        this.bysicle = bysicle;
    }
    Decorator.prototype.getDescription = function () {
        return this.bysicle.getDescription();
    };
    return Decorator;
}());
var SportBysicle = /** @class */ (function (_super) {
    __extends(SportBysicle, _super);
    function SportBysicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportBysicle.prototype.getDescription = function () {
        return this.bysicle.getDescription() + ", GPS, Speedometr";
    };
    return SportBysicle;
}(Decorator));
var ElectroBysicle = /** @class */ (function (_super) {
    __extends(ElectroBysicle, _super);
    function ElectroBysicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectroBysicle.prototype.getDescription = function () {
        return this.bysicle.getDescription() + ", electroengine ";
    };
    return ElectroBysicle;
}(Decorator));
var bysicle = new StandardBysicle();
var decorator1 = new SportBysicle(bysicle);
var decorator2 = new ElectroBysicle(bysicle);
var decorator3 = new ElectroBysicle(decorator1);
console.log(decorator1.getDescription());
console.log(decorator2.getDescription());
console.log(decorator3.getDescription());
