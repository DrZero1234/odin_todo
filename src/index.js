import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getTodos, getProjects, resetStorage} from "./functions/storage.js"
import {generateAllTodos,generateAllProjects, hideSection} from "./functions/DOMFunctions.js"

// lel

document.addEventListener("DOMContentLoaded", () => {

    const sidebar_todos = document.getElementById("sidebar-todos")

    const projects_html = document.getElementById("projects");
    const PROJECT_LIST_HTML = document.getElementById("project-list")

    projects_html.addEventListener("click", () => {
        generateAllProjects()
        hideSection(PROJECT_LIST_HTML)
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

    generateAllTodos();
})
console.log(getTodos())
getProjects()
