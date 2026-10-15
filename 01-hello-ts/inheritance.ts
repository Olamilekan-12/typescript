export {}

class Animal {
    constructor(
        public name : string,
        protected sound: string = "..."
    ) {
        
    }

    speak(): string {
        return this.name + " says " + this.sound
    }

    describe(): string {
        return "I am an animal named " + this.name
    }
}

class Dog extends Animal {
    constructor(
        name: string,
        public breed: string
    ){
        super(name, "woof")
    }

    override describe(): string {
        return super.describe() + " (a " +this.breed + ")"
    }

    fetch(): string {
        return this.name + " fetches the ball"
    }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name, "meow");
  }
}

const rex = new Dog("Rex", "Labrador");
const tom = new Cat("Tom");

console.log(rex.speak());
console.log(rex.describe());
console.log(rex.fetch());
console.log(tom.speak());

const pets: Animal[] = [rex, tom];
for (const p of pets) {
  console.log(p.describe());
}

console.log(rex instanceof Dog, rex instanceof Animal, tom instanceof Dog);


