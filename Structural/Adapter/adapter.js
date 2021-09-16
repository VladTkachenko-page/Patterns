var MemoryCard = /** @class */ (function () {
    function MemoryCard() {
    }
    MemoryCard.prototype.insert = function () {
        console.log('Карта памяти успешно вставлена!');
    };
    MemoryCard.prototype.copyData = function () {
        console.log('Данные скопированы на компьютер!');
    };
    return MemoryCard;
}());
var Adapter = /** @class */ (function () {
    function Adapter(memoryCard) {
        this.memoryCard = memoryCard;
    }
    Adapter.prototype.connectWithUsbCable = function () {
        this.memoryCard.insert();
        this.memoryCard.copyData();
    };
    return Adapter;
}());
var cardReader = new Adapter(new MemoryCard());
cardReader.connectWithUsbCable();
