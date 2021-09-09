var Originator = /** @class */ (function () {
    function Originator(text) {
        this.text = text;
    }
    Originator.prototype.addText = function (char) {
        this.text = this.text + char;
        console.log('Change: ', this.text);
    };
    Originator.prototype.save = function () {
        console.log('Save');
        return new ConcreteMemento(this.text);
    };
    Originator.prototype.restore = function (memento) {
        this.text = memento.getText();
        console.log("Undo: " + this.text);
    };
    return Originator;
}());
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(text) {
        this.text = text;
    }
    ConcreteMemento.prototype.getText = function () {
        return this.text;
    };
    return ConcreteMemento;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        this.originator.restore(memento);
    };
    return Caretaker;
}());
var originator = new Originator('fsdafsdgasgf');
var caretaker = new Caretaker(originator);
caretaker.backup();
originator.addText('iiiiiii');
caretaker.backup();
originator.addText('00000000000');
caretaker.undo();
caretaker.undo();
