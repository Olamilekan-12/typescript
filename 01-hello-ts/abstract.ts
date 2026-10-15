export {}

abstract class Shape {
    constructor(public name: string){}

    abstract area(): number;

    describe(): string {
        return this.name + " with area " + this.area().toFixed(2)
    }
}

class Circle extends Shape {

    constructor(public radius : number){
        super("circle")
    }
    area(): number {
        return Math.PI * this.radius ** 2
    }
}

class Rectangle extends Shape {
    constructor(
        public width: number,
        public height: number,
    ){
        super("rectangle")
    }
    area(): number {
        return this.width * this.height
    }
}

const shapes: Shape[] = [new Circle(2), new Rectangle(3,4)]
for(const s of shapes){
    console.log(s.describe())
}
console.log(shapes[0] instanceof Shape, shapes[0] instanceof Circle);