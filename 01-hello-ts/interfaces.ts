interface Animal {
    name: string
    age : number
}

interface Dog extends Animal {
    breed : string
}

const rex: Dog  = {
    name : "Rex",
    age : 3,
    breed : "Labrador"
}

console.log(rex);

interface Trainable {
    commands : string[]
}

interface ServiceDog extends Dog, Trainable {
    handler: string
}

const buddy: ServiceDog = {
    name : "Buddy",
    age : 5,
    breed : "Golden",
    commands : ["sit","stay"],
    handler : "Olamilekan"
}

console.log(buddy)

type Vehicle = {
    wheels : number
}

type Car = Vehicle & {
    brand : string
}

const myCar : Car = {
    wheels : 4,
    brand : "Toyota"
}
console.log(myCar);

interface Settings {
    theme : string
}

interface Settings {
    fontSize : number
}

const s: Settings = {
    theme : "dark",
    fontSize : 14
}


// type Config = { host: string };
// type Config = { port: number };   // error: duplicate identifier