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
    StandardBysicle.prototype.createModification = function () {
        return 'create standard bysicle modification';
    };
    return StandardBysicle;
}());
var SportBysicle = /** @class */ (function () {
    function SportBysicle() {
    }
    SportBysicle.prototype.createModification = function () {
        return 'create sport bysicle modification';
    };
    return SportBysicle;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
var FactoryBysicle = /** @class */ (function (_super) {
    __extends(FactoryBysicle, _super);
    function FactoryBysicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactoryBysicle.prototype.create = function (name) {
        switch (name) {
            case "simple":
                return new StandardBysicle();
            case "sport":
                return new SportBysicle();
            default:
                return new StandardBysicle();
        }
    };
    return FactoryBysicle;
}(Factory));
var factory = new FactoryBysicle();
console.log(factory.create('sport').createModification());
console.log(factory.create('simple').createModification());
