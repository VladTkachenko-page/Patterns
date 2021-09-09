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
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.addWheels = function () {
        console.log('Add 4 wheels');
    };
    CarBuilder.prototype.build = function () {
        this.addWheels();
        this.addEngine();
        this.addFrame();
        this.addElectronic();
    };
    return CarBuilder;
}());
var ElectroCar = /** @class */ (function (_super) {
    __extends(ElectroCar, _super);
    function ElectroCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectroCar.prototype.addEngine = function () {
        console.log('Add electronic engine');
    };
    ElectroCar.prototype.addFrame = function () {
        console.log('Add special frame for electocar');
    };
    ElectroCar.prototype.addElectronic = function () {
        console.log('Add special electronic');
    };
    return ElectroCar;
}(CarBuilder));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.addEngine = function () {
        console.log('Add engine');
    };
    Car.prototype.addFrame = function () {
        console.log('Add frame');
    };
    Car.prototype.addElectronic = function () {
        console.log('Add electronic');
    };
    return Car;
}(CarBuilder));
var electorCar = new ElectroCar();
electorCar.build();
var car = new Car();
electorCar.build();
