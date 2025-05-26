"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUserBuilder = void 0;
var User_1 = require("./User");
var CustomUserBuilder = /** @class */ (function () {
    function CustomUserBuilder() {
        this.reset();
    }
    CustomUserBuilder.prototype.reset = function () {
        this.user = new User_1.User();
    };
    CustomUserBuilder.prototype.setEmail = function (email) {
        this.user.setEmail(email);
        return this;
    };
    CustomUserBuilder.prototype.setPassword = function (password) {
        this.user.setPassword(password);
        return this;
    };
    CustomUserBuilder.prototype.setFirstName = function (firstname) {
        this.user.firstName = firstname;
        return this;
    };
    CustomUserBuilder.prototype.setLastName = function (lastname) {
        this.user.lastname = lastname;
        return this;
    };
    CustomUserBuilder.prototype.getUser = function () {
        var builtUser = this.user;
        this.reset();
        return builtUser;
    };
    return CustomUserBuilder;
}());
exports.CustomUserBuilder = CustomUserBuilder;
