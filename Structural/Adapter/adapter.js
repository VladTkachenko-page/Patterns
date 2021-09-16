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
var UALanguage = /** @class */ (function () {
    function UALanguage() {
    }
    UALanguage.prototype.request = function () {
        return 'Мені тринадцятий минало';
    };
    return UALanguage;
}());
var ForeignLanguage = /** @class */ (function () {
    function ForeignLanguage() {
    }
    ForeignLanguage.prototype.specificRequest = function () {
        return 'I was herding lambs outside the village';
    };
    return ForeignLanguage;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(ForeignLanguage) {
        var _this = _super.call(this) || this;
        _this.ForeignLanguage = ForeignLanguage;
        return _this;
    }
    Adapter.prototype.request = function () {
        return "Adapter: (TRANSLATED): \u042F \u043F\u0430\u0441 \u044F\u0433\u043D\u044F\u0442\u0430 \u0437\u0430 \u0441\u0435\u043B\u043E\u043C";
    };
    return Adapter;
}(UALanguage));
var ua = new UALanguage();
var en = new ForeignLanguage();
var adapter = new Adapter(en);
console.log(ua.request());
console.log(en.specificRequest());
console.log(adapter.request());
