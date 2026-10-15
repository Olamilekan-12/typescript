export {}

class  Temprature {
    readonly unit: string = "C";
    nickname?: string;
    private _celcius = 0
    constructor(public readonly label : string) {}

    get celcius(): number {
        return this._celcius
    }

    set celcius(value: number){
        if(value < -273.15){
            throw new Error("below absolute zero")
        }
        this._celcius = value
    }
    get fahrenheit(): number {
        return (this._celcius * 9) / 5 + 32
    }
}

const t = new Temprature("kitchen")
t.celcius = 25
console.log(t.label,t.celcius, t.fahrenheit)
console.log(t.nickname)
console.log(t.nickname?.toUpperCase())

try {
    t.celcius = -500
} catch (error) {
    console.log("rejected")
}
console.log(t.celcius)