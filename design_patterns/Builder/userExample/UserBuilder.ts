import { User } from "./User";

export interface UserBuilder {
    reset(): void;
    setEmail(email: string): void;
    setPassword(password: string): void;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
    getUser(): User

}