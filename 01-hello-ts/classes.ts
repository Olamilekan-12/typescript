export {}

class Person {
    name : string
    age : number;

    constructor(name :string, age: number){
        this.name = name
        this.age = age
    }

    greet (): string {
        return "Hi, I am " + this.name + " an I am " + this.age
    }

    birthday():void {
        this.age++
    }
}

const ola = new Person("Ola", 66)
const bello = new Person("Bello", 97)

console.log(ola.greet())
ola.birthday()
console.log(ola.age, bello.age)

const someone: Person = ola
console.log(someone.name)