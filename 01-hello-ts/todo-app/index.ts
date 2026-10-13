import { addTodo, completeTodo, listTodos, countByPriority } from "./store.js";
import { printTodos } from "./format.js";

addTodo("Learn types", "high");
addTodo("Write functions");
addTodo("Push to GitHub", "low");

completeTodo(1);

printTodos(listTodos());
console.log("--- pending ---");
printTodos(listTodos(true));
console.log(countByPriority());