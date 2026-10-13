export const PI = 3.14159

export function add(a: number, b:number):  number{
    return a + b
}

function secret(): string {
    return "not exported"
}

export interface Point {
    x : number
    y : number
}

function multiply(a:number, b:number): number {
    return a * b
}

export {
    multiply as mul
}