import { UserDirector } from "./UserDirector";
import { UserBuilder } from "./UserBuilder";
import { CustomUserBuilder } from "./CustomUserBuider";

const adminUserBuilder = new CustomUserBuilder();
const director = new UserDirector(adminUserBuilder);
director.buildAdminUser();
const adminUser = adminUserBuilder.getUser();
adminUser.displayInfo();