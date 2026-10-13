export interface Square {
    sides : number
}

export function squareArea(s : Square): number {
    return s.sides ** 2
}