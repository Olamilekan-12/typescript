export {}

class Point {
    constructor(public x : number, public y: number) {
        
    }
}

class Coordinate {
    constructor(public x : number, public y : number){}
}

class Secretive {
    private id = 1
}

class Lookalike {
    private id = 1
}

class Greeter {
    constructor(public name: string){}
    hello(): string{
        return "hi " + this.name
    }

    helloArrow = (): string => "hi " + this.name
}

function show(p : Point):void{
    console.log(p.x, p.y)
}

function make(cls: new(x: number, y:number) => Point): Point {
    return new cls(0,0)
}

show(new Point(1, 2));
show(new Coordinate(3, 4));
show({ x: 5, y: 6 });

console.log(make(Point), make(Coordinate));

const g = new Greeter("Ada");
const arrow = g.helloArrow;
console.log(arrow());