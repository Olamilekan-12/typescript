import {PI as pi ,add as sum} from "./math.js"
import type { Point } from "./math.js"
// import * as math from "./math.js"
import { mul } from "./math.js"
import anyhting, {LEVEL} from "./logger.js"
import {circleArea,squareArea,constant} from "./shapes/index.js"
import { count,increment } from "./counter.js"
import { bunmFromA } from "./a.js"



console.log(pi)
console.log(sum(2,3))
console.log(mul(3,4))
anyhting("server running") // PLEASE DON'T IMPORT IT AS ANYTHING O, LOL. JUST TESTING...
console.log(LEVEL)

const p: Point = {
    x : 1,
    y : 2
}
console.log(sum(p.x, p.y))
console.log(circleArea({
    radius : 2
}))
console.log(squareArea({
    sides : 3
}))
console.log(constant.SIDE_SQUARE)

console.log(count)
increment()
console.log(count)
bunmFromA()
console.log(count)
