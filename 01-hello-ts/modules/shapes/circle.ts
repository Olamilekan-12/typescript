export interface Circle {
    radius : number
}

export function circleArea(c: Circle): number {
    return Math.PI * c.radius ** 2
}