export {}

const ids:Array<number> = [1,2,3]
const names = new Set<string>(["a","a","b","c"])
names.add("d")
names.add("b")

const ages = new Map<string, number>()
ages.set("Ola", 55)
ages.set("Bello", 80)

const olaAge = ages.get("Ola")
const belloAge = ages.get("Bello")

console.log({
    ids,
    namesList : names,
    names : names.size,
    nameHas : names.has("a")
})
console.log(olaAge,belloAge)

if (belloAge != undefined){
    console.log(belloAge + 1)
}