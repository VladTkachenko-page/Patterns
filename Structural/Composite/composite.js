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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    return Component;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return "Leaf";
    };
    return Leaf;
}(Component));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Composite.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Composite.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return "Branch(" + results.join('+') + ")";
    };
    return Composite;
}(Component));
var tree = new Composite();
var branch1 = new Composite();
var branch2 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log(tree.operation());
