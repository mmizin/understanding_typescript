import { UserBuilder } from "./UserBuilder";
import { User } from "./User";

export class CustomUserBuilder implements UserBuilder {
    private user!: User;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.user = new User();
    }

    public setEmail(email: string): this {
        this.user.setEmail(email);
        return this;
    }

    public setPassword(password: string): this {
        this.user.setPassword(password)
        return this;
    }

    public setFirstName(firstname: string): this {
        this.user.firstName = firstname;
        return this
    }

    public setLastName(lastname: string): this {
        this.user.lastname = lastname;
        return this;
    }

    public getUser(): User {
        const builtUser = this.user;
        this.reset();
        return builtUser;
    }

}