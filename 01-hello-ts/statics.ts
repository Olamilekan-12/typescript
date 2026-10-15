export {}

class Counter {
    static total = 0
    readonly id: number;

    constructor() {
        Counter.total++;
        this.id = Counter.total
    }
    static describe(): string {
        return "Created " + Counter.total + " counters"
    }
}

class Color {
    private constructor(
        public r:number,
        public g:number,
        public b:number
    ){}

    static readonly RED = new Color(255, 0, 0);
    static fromHex(hex:string): Color {
        const n = parseInt(hex.slice(1), 16)
        return new Color((n >> 16) & 255, (n >> 8) & 255, n & 255)
    }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.id, c2.id, Counter.total);
console.log(Counter.describe());
console.log(Color.RED);
console.log(Color.fromHex("#00ff80"));