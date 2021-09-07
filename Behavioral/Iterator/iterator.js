var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(collection) {
        this.collection = [];
        this.index = 0;
        this.collection = collection;
    }
    ArrayIterator.prototype.next = function () {
        return this.collection[this.index++];
    };
    ArrayIterator.prototype.hasNext = function () {
        return this.index < this.collection.length;
    };
    return ArrayIterator;
}());
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(items) {
        this.items = [];
        this.items = items;
    }
    NumbersCollection.prototype.createIterator = function () {
        return new ArrayIterator(this.items);
    };
    return NumbersCollection;
}());
var numbers = new NumbersCollection([1, 4, 6, 8, 10, 15]);
var iterator = numbers.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
