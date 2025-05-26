"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDirector_1 = require("./UserDirector");
var CustomUserBuider_1 = require("./CustomUserBuider");
var adminUserBuilder = new CustomUserBuider_1.CustomUserBuilder();
var director = new UserDirector_1.UserDirector(adminUserBuilder);
director.buildAdminUser();
var adminUser = adminUserBuilder.getUser();
adminUser.displayInfo();
