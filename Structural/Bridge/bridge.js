var Page = /** @class */ (function () {
    function Page(theme) {
        this.theme = theme;
    }
    Page.prototype.getContent = function () {
        return "Page in " + this.theme.getColor();
    };
    Page.prototype.setTheme = function (theme) {
        this.theme = theme;
    };
    return Page;
}());
var DarkTheme = /** @class */ (function () {
    function DarkTheme() {
    }
    DarkTheme.prototype.getColor = function () {
        return 'Dark Black';
    };
    return DarkTheme;
}());
var WhiteTheme = /** @class */ (function () {
    function WhiteTheme() {
    }
    WhiteTheme.prototype.getColor = function () {
        return 'White';
    };
    return WhiteTheme;
}());
var darkTheme = new DarkTheme();
var whiteTheme = new WhiteTheme();
var page = new Page(darkTheme);
console.log(page.getContent());
page.setTheme(whiteTheme);
console.log(page.getContent());
