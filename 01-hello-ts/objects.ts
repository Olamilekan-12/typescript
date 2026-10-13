type User = {
    id : number
    name : string
    email : string
}

const user : User = {
    id : 1,
    name : "Olamilekan",
    email : "belloolamilekan661@gmail.com"
}

console.log(user.name)

interface Product {
    id: number;
    title: string;
    price: number;
    description?:string;
    readonly sku: string
}

const book:Product = {
    id : 1,
    title : "TS Basics",
    price : 20,
    sku : "B-001"
}
console.log(book)
book.price = 50;
console.log(book)

function describe(p: Product): string {
    return p.title + " costs " + p.price
}

function modifyProduct(p : Product, increment: number = 10): Product{
    p.price = p.price + increment
    return p
}
console.log(describe(book))
console.log(modifyProduct(book, 20))

function formatId(id: number | string): string{
    if (typeof id === "string"){
        return id.toUpperCase();
    }
    return "#"+ id.toFixed(0)
}

console.log(formatId("abc-42"))
console.log(formatId(42))
