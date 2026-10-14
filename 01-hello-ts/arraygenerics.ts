export {}

function myMap<T,U>(items: T[], fn: (param : T)=> U): U[]{
    const result: U[] = []
    for(const item of items){
        result.push(fn(item))
    }
    return result
}

function myFilter<T>(items:T[], test: (param : T) => boolean): T[]{
    const result: T[] = []
    for(const item of items){
        if(test(item)){
            result.push(item)
        }
    }
    return result
}

const nums = [1,2,3,4]
const labels = myMap(nums, (n) => "items " + n)
const lengths = myMap(["a", "bb", "ccc"], (s) => s.length)
const evens = myFilter(nums, (n) => n % 2 === 0)

console.log(labels, lengths, evens)

const builtinLabels = nums.map((n) => "item " + n)
console.log(builtinLabels)