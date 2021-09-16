var Door = /** @class */ (function () {
    function Door() {
    }
    Door.prototype.open = function () {
        console.log('Opening door');
    };
    Door.prototype.close = function () {
        console.log('Closing the door');
    };
    return Door;
}());
var CodePanel = /** @class */ (function () {
    function CodePanel(door) {
        this.doorOpen = false;
        this.door = door;
    }
    CodePanel.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.door.open();
            this.doorOpen = true;
        }
        else {
            console.log('Wrong code');
        }
    };
    CodePanel.prototype.authenticate = function (password) {
        return password === 1111;
    };
    CodePanel.prototype.close = function () {
        if (this.doorOpen) {
            this.door.close();
            this.doorOpen = false;
        }
    };
    return CodePanel;
}());
var door = new CodePanel(new Door());
door.open(1121);
door.open(1111);
door.close();
