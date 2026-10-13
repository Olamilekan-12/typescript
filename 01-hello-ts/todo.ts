type Priority = "low"|"medium"|"high"

interface Todo {
    id : number
    title : string
    done : boolean
    priority : Priority
}

const todos: Todo[] = []
let nextId = 1;

function addTodo(title:string, priority:Priority = "medium"): Todo {
    const todo: Todo = {
        id : nextId++,
        title,
        done : false,
        priority
    }
    todos.push(todo)
    return todo
}

function toggleTodo(id : number): boolean {
    const todo = todos.find(t => t.id === id) 
    if(!todo){
        return false
    }
    todo.done = !todo.done
    return true
}

function listTodos(onlyPending: boolean = false): Todo[]{
    return onlyPending ? todos.filter((t) => !t.done) : todos
}

function printTodos(items: Todo[]): void {
    items.forEach((item) => {
        const mark = item.done ? "[X]" : "[ ]"
        console.log(`${mark}, ${item.id}, ${item.title}, (${item.priority})`)
    })
}

addTodo("Learn types", "high")
addTodo("Write functions")
addTodo("Push to Github", "low")
addTodo("Some tasks", "low")

toggleTodo(1)
toggleTodo(99)
printTodos(listTodos())

function countByPriority(): Record<Priority, number> {
    const counts: Record<Priority, number> = {
        "low" : 0,
        "medium" : 0,
        "high" : 0
    }

    todos.forEach((todo) => {
        counts[todo.priority]++
    })
    return counts
}

console.log(countByPriority())