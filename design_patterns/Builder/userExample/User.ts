
export class User {
    private email: string = "";
    private password: string = "";
    public firstName: string = "";
    public lastname: string = "";

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public displayInfo(): void {
        console.log(`User Info:`);
        console.log(`- Email: ${this.email}`);
        console.log(`- First Name: ${this.firstName}`);
        console.log(`- Last Name: ${this.lastname}`);
        console.log("---");
    }
}