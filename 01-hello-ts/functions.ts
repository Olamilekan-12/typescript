function add(a:number, b:number):number {
    return a + b
}

const greet = (name: string): string => {
    return "Hello, " + name 
}

console.log(add(5, 4))
console.log(greet("Olamilekan"))

function welcome(name:string, title?:string): string {
    if(title){
        return "Welcome, " + title + " " + name
    }
    return "Welcome, " + name
}

function power(base:number, exponent:number = 2) : number {
    return base ** exponent
}

console.log(welcome("Olamilekan"))
console.log(welcome("Olamilekan","Dr."))

console.log(power(2))
console.log(power(5,4))


function logMessage(msg: string) : void {
    console.log("[LOG]", msg)
}

logMessage("done")