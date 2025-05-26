
export class Pizza {
    public dough: string = "";
    public sauce: string = "";
    public toppings: string[] = [];
    public cheese: string = "";
    public baked: boolean = false;

    public listParts(): void {
        console.log(`Pizza with:`);
        if (this.dough) console.log(`- Dough: ${this.dough}`);
        if (this.sauce) console.log(`- Sauce: ${this.sauce}`);
        if (this.cheese) console.log(`- Cheese: ${this.cheese}`);
        if (this.toppings.length > 0) console.log(`- Toppings: ${this.toppings.join(', ')}`);
        if (this.baked) console.log(`Pizza is baked! ♨️`);
        console.log("---");
    }
}
