import type { Todo } from "./types.js";

export function printTodos(items:Todo[]):void{
    items.forEach((item) => {
        const mark = item.done ? "[x]" : "[ ]"
        console.log(`${mark}, ${item.id}, ${item.title}, "(${item.priority})"`)
    })
}