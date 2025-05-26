"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDirector = void 0;
var UserDirector = /** @class */ (function () {
    function UserDirector(userBuilder) {
        this.userBuilder = userBuilder;
    }
    UserDirector.prototype.setBuilder = function (builder) {
        this.userBuilder = builder;
    };
    UserDirector.prototype.buildAdminUser = function () {
        if (!this.userBuilder) {
            throw new Error("Builder not set. Call setBuilder() first.");
        }
        this.userBuilder.reset();
        this.userBuilder.setEmail("lalalal@gmail.com");
        this.userBuilder.setPassword("admin123");
        this.userBuilder.setFirstName("Admin");
        this.userBuilder.setLastName("User");
    };
    UserDirector.prototype.buildRegularUser = function () {
        if (!this.userBuilder) {
            throw new Error("Builder not set. Call setBuilder() first.");
        }
        this.userBuilder.reset();
        this.userBuilder.setEmail("ajhfka@gmail.com");
        this.userBuilder.setPassword("user123");
        this.userBuilder.setFirstName("Regular");
        this.userBuilder.setLastName("User");
    };
    return UserDirector;
}());
exports.UserDirector = UserDirector;
