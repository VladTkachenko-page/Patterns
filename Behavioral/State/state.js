var FlashlightOn = /** @class */ (function () {
    function FlashlightOn() {
    }
    FlashlightOn.prototype.handle = function (flashlight) {
        console.log("Flashlight on");
        flashlight.state = new FlashlightBlink();
    };
    return FlashlightOn;
}());
var FlashlightBlink = /** @class */ (function () {
    function FlashlightBlink() {
    }
    FlashlightBlink.prototype.handle = function (flashlight) {
        console.log("Flashlight blink");
        flashlight.state = new FlashlightOff();
    };
    return FlashlightBlink;
}());
var FlashlightOff = /** @class */ (function () {
    function FlashlightOff() {
    }
    FlashlightOff.prototype.handle = function (flashlight) {
        console.log("Flashlight off");
        flashlight.state = new FlashlightOn();
    };
    return FlashlightOff;
}());
var Flashlight = /** @class */ (function () {
    function Flashlight(state) {
        this.state = state;
    }
    Flashlight.prototype.request = function () {
        this.state.handle(this);
    };
    return Flashlight;
}());
var flashlight = new Flashlight(new FlashlightOn());
flashlight.request();
flashlight.request();
flashlight.request();
flashlight.request();
flashlight.request();
flashlight.request();
