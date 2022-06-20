import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getAllTodos, getAllProjects, getProject, resetStorage, defaulStorage} from "./functions/storage.js"
import {generateAllTodos,generateAllProjects, hideSection} from "./functions/DOMFunctions.js"

// lel

document.addEventListener("DOMContentLoaded", () => {


    generateAllProjects()

    const p1 = getProject("dacc1c34-8405-48c3-9d9c-7b06b1146614")
    const project_todo = Todo("Project_todo", "First project_todo","2022-06-20","normal")
    console.log(p1)




    const sidebar_todos = document.getElementById("sidebar-todos")


    const projects_html = document.getElementById("projects");


    const PROJECT_LIST_HTML = document.getElementById("project-list")
    const PROJECT_LIST_ITEMS = PROJECT_LIST_HTML.querySelectorAll("li")

    console.log(PROJECT_LIST_HTML)


    projects_html.addEventListener("click", () => {
        hideSection(PROJECT_LIST_HTML)
    })

    sidebar_todos.addEventListener("click", () => {
        generateAllTodos()
        const todos_title_html = document.getElementById("todos-title")
        todos_title_html.textContent = "Every Todos"
    })

    
    console.log(PROJECT_LIST_ITEMS)
    

    generateAllTodos();
})
console.log(getAllTodos())
getAllProjects()


