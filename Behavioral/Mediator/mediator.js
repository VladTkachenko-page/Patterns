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
var ChatRoom = /** @class */ (function () {
    function ChatRoom(user1, user2) {
        this.user1 = user1;
        this.user1.setMediator(this);
        this.user2 = user2;
        this.user2.setMediator(this);
    }
    ChatRoom.prototype.send = function (message, user) {
        if (this.user1 === user) {
            console.log("User2 receive message: '" + message + "' from User1");
        }
        else {
            console.log("User1 receive message: '" + message + "' from User2");
        }
    };
    return ChatRoom;
}());
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return User;
}());
var User1 = /** @class */ (function (_super) {
    __extends(User1, _super);
    function User1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User1.prototype.send = function (message) {
        this.mediator.send(message, this);
    };
    return User1;
}(User));
var User2 = /** @class */ (function (_super) {
    __extends(User2, _super);
    function User2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User2.prototype.send = function (message) {
        this.mediator.send(message, this);
    };
    return User2;
}(User));
var user1 = new User1();
var user2 = new User2();
var mediator = new ChatRoom(user1, user2);
user1.send('Hello');
user2.send('Hi');
