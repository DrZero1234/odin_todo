import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getTodos, getProjects, resetStorage} from "./functions/storage.js"

// lel

document.addEventListener("DOMContentLoaded", () => {
})
console.log(`Projects: ${JSON.parse(getTodos())}`)
console.log("Testing")