export {}

interface Printable {
    print() : string;
}

interface Savable {
    save(): void
}

class Invoice implements Printable {
    constructor(public amount: number){}

    print(): string {
        return "Invoice: " + this.amount
    }
}

class Report implements Printable, Savable {
    constructor(public title: string) {}

    print(): string {
        return "Report: " + this.title
    }

    save(): void {
        console.log("saved " + this.title)
    }
}

function printAll(items:Printable[]):void {
    items.forEach((i) => console.log(i.print()))
}

const docs = [new Invoice(250), new Report("Q3")]
printAll(docs)
new Report("Q4").save()