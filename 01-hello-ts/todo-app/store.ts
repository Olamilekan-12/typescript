import type { Priority,Todo } from "./types.js";

const todos: Todo[] = []
let nextId = 1;

export function addTodo(title:string, priority:Priority = "medium"): Todo {
    const todo: Todo = {
        id: nextId++,
        title,
        done : false,
        priority
    }
    todos.push(todo)
    return todo
}

export function completeTodo(id: number): boolean{
    const todo = todos.find((td) => td.id === id)
    if(!todo){
        return false
    }
    todo.done = true
    return true
}

export function listTodos(onlyPending:boolean = false): Todo[] {
    const result = onlyPending ? todos.filter((td) => !td.done) : todos
    return [...result]
}

export function countByPriority(): Record<Priority, number>{
    const counts: Record<Priority,number> = {
        "low" : 0,
        "medium" : 0,
        "high" : 0
    }
    todos.forEach((td)=> {
        counts[td.priority]++
    })
    return counts
}
