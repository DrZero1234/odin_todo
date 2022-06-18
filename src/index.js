import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getTodos, getProjects, resetStorage} from "./functions/storage.js"
import {generateAllTodos, clearSection} from "./functions/DOMFunctions.js"

// lel

document.addEventListener("DOMContentLoaded", () => {

    const sidebar_todos = document.getElementById("sidebar-todos")

    const projects_html = document.getElementById("projects");

    projects_html.addEventListener("click", () => {
        console.log("clicked projects")
    })

    resetStorage()
    const project1 = Project("Project1");
    const project2 = Project("Project2");

    const todo1 = Todo("Todo1","First todo", "2022-06-12","normal");
    const todo2 = Todo("Todo2","Second todo", "2022-06-12","urgent");

    todo1.addTodo();
    todo2.addTodo();

    project1.addProject();
    project2.addProject();

    sidebar_todos.addEventListener("click", () => {
        generateAllTodos()
    })


})
console.log(getTodos())
getProjects()
