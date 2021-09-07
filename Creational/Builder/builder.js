var Bysicle = /** @class */ (function () {
    function Bysicle() {
    }
    return Bysicle;
}());
var BuildBysicle = /** @class */ (function () {
    function BuildBysicle() {
        this.bysicle = new Bysicle();
    }
    BuildBysicle.prototype.setName = function (name) {
        this.bysicle.name = name;
        return this;
    };
    BuildBysicle.prototype.setBell = function (bell) {
        this.bysicle.bell = bell;
        return this;
    };
    BuildBysicle.prototype.setBasket = function (basket) {
        this.bysicle.basket = basket;
    };
    BuildBysicle.prototype.setGPS = function (GPS) {
        this.bysicle.GPS = GPS;
    };
    BuildBysicle.prototype.setSpeedometer = function (speedometr) {
        this.bysicle.speedometr = speedometr;
    };
    BuildBysicle.prototype.getProduct = function () {
        var result = this.bysicle;
        return result;
    };
    return BuildBysicle;
}());
var standardBysicle = new BuildBysicle();
standardBysicle.setName('Standard bike');
standardBysicle.setBell(true);
standardBysicle.setBasket(true);
standardBysicle.getProduct();
console.log(standardBysicle);
