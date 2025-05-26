import { UserBuilder } from "./UserBuilder";


export class UserDirector {
    
    constructor(private userBuilder: UserBuilder) {}

    public setBuilder(builder: UserBuilder): void {
        this.userBuilder = builder;
    }

    public buildAdminUser(): void {
        if (!this.userBuilder) {
            throw new Error("Builder not set. Call setBuilder() first.");
        }
        this.userBuilder.reset();
        this.userBuilder.setEmail("lalalal@gmail.com");
        this.userBuilder.setPassword("admin123");
        this.userBuilder.setFirstName("Admin");
        this.userBuilder.setLastName("User");
    }

    public buildRegularUser(): void {
        if (!this.userBuilder) {
            throw new Error("Builder not set. Call setBuilder() first.");
        }
        this.userBuilder.reset();
        this.userBuilder.setEmail("ajhfka@gmail.com");
        this.userBuilder.setPassword("user123");
        this.userBuilder.setFirstName("Regular");
        this.userBuilder.setLastName("User");
    }
}