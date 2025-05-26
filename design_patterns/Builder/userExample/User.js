"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastname = "";
    }
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.displayInfo = function () {
        console.log("User Info:");
        console.log("- Email: ".concat(this.email));
        console.log("- First Name: ".concat(this.firstName));
        console.log("- Last Name: ".concat(this.lastname));
        console.log("---");
    };
    return User;
}());
exports.User = User;
