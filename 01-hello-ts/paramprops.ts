export {};

class Account {
    #pin : string
    readonly createdBy: string = "system"

    constructor(
        public owner: string,
        private balance:number = 0,
        pin: string = "0000"
    ){
        this.#pin = pin;
        console.log("created account for " + owner)
    }

    deposit(amount: number): void {
        this.balance += amount
    }

    describe(): string {
        return this.owner + " has " + this.balance + " (by " + this.createdBy + ")"
    }
}

const a = new Account("Bello", 100);
const b = new Account("Bolu");

a.deposit(25)
b.deposit(10)

console.log(a.describe())
console.log(b.describe())
console.log(a.owner)