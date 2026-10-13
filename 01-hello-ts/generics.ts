function first<T>(items:T[]):T | undefined {
   return items[0]
}

const n = first([10,20,30])
const s = first(["a", "b", "c"])

const a = first<number>([1,2,3])
const b = first<string>(["a","b","c"])

const empty = first([]);
const emptyNumbers = first<number>([]);
const mixed = first<number | string>([1, "two", 3]);

console.log(empty, emptyNumbers, mixed);

function pair<A, B>(first: A, second: B): [A, B] {
   return [first, second]
}

function pairSame<T>(first:T, second:T): [T,T]{
   return [first,second]
}

const p1 = pair("age", 30)
const p2 = pair(true,[1,2])
const p3 = pairSame(1,2)
console.log(p1)
console.log(p2)
console.log(p3)

function longest<T extends {length: number}>(a : T, b : T): T {
   return a.length >= b.length ? a : b
}

const word = longest("apple", "banana")
const list = longest([1,2,3],[4,5])
const custom = longest({length : 10, label : "A"},{length : 3, label : "C"})
console.log(word, list, custom)

interface Box<T>{
   value : T
}

type Pair2<A, B> = {
   first : A,
   second : B
}

interface ApiResponse<T> {
   ok : boolean,
   data : T
}

const numberBox:Box<number> = {
   value : 10
}

const stringBox : Box<string> = {
   value : "10"
}
const entry : Pair2<string,number> = {
   first : "one",
   second : 2
}
interface User {
   fistName : string,
   lastName : string,
   age : number,
   email : string
}
const userResponse: ApiResponse<User> = {
   ok : true,
   data : {
      fistName : "Bello",
      lastName : "Blahh",
      age : 500,
      email : "user@example.go"
   }
}

console.log({
   numberBox,
   stringBox,
   entry,
   userResponse
})

type Mapper<T> = (value : T) => T
const testFunc: Mapper<number> = (value) => value
const testFunc2: Mapper<string> = (value) => value

type Identity = <T>(value : T) => T
const testFunc3:Identity = (value) => value
testFunc3("Hi")
testFunc3(true)

const applyTo = <T, R>(value :T, fn: (input : T) => R) : R => {
   return fn(value)
}

const length = applyTo<string,number>("hello", (s) => s.length)
const length2 = applyTo<number,boolean>(10, (s) => s > 5)

interface Result<T= string> {
   value : T
}

interface Pair3<A, B = A>{
   left : A
   right : B
}

const r1: Result = {
   value : "text"
}

const r2:Result<number> = {
   value : 42
}

const p4: Pair3<number> = { left: 1, right: 2 };
const p5: Pair3<number, string> = { left: 1, right: "two" };

console.log(r1, r2, p4, p5);

interface Person {
   id : number
   name : string
   email : string
}

type PersonKey = keyof Person
let k:PersonKey = "name"

function getProps<T, K extends keyof T>(obj:T, key:K) : T[K] {
   return obj[key]
}
const user1:Person = {
   id : 2,
   name : "Bello",
   email : "test@test.com"
}

const getName = getProps(user1, "name")
const userId = getProps(user1, "id")


class Stack<T>{
   private items: T[] = []

   push(item: T): void {
      this.items.push(item)
   }

   pop():T |undefined {
      return this.items.pop()
   }

   peek(): T | undefined {
      return this.items[this.items.length - 1]
   }

   get size():number {
      return this.items.length
   }
}

const numbers = new Stack<number>()
numbers.push(1)
numbers.push(2)
numbers.push(3)

const strings = new Stack<string>();
strings.push("a");

console.log(numbers.pop(), numbers.peek(), numbers.size);
console.log(strings.pop(), strings.pop(), strings.size);
