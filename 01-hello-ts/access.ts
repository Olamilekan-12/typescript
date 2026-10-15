export {}

class  Account {
    public owner : string
    private balance : number
    #pin : string;

    constructor(owner : string, balance: number, pin: string) {
        this.owner = owner
        this.balance = balance
        this.#pin = pin
    }

    deposit(amount : number): void {
        this.balance+= amount
    }

    getBalance():number {
        return this.balance
    }

    checkPin(attempt: string): boolean {
        return this.#pin === attempt
    }
}

const acc = new Account("Ola", 100, "1234")
acc.deposit(50)
acc.owner = "Shile"
console.log({
    owner : acc.owner,
    balance : acc.getBalance(),
    pinCheck1 : acc.checkPin("1234"),
    pinCheck2 : acc.checkPin("0000")
})

console.log("balance: ",(acc as any).balance);
console.log((acc as any)["#pin"]);
