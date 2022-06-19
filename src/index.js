import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getAllTodos, getAllProjects, getProject, resetStorage} from "./functions/storage.js"
import {generateAllTodos,generateAllProjects, hideSection} from "./functions/DOMFunctions.js"

// lel

document.addEventListener("DOMContentLoaded", () => {

    generateAllProjects()


    const first_project_todo = Todo("Project todo test", "This is a test if the project todo is working", "2022-06-19","normal");
    const project1 = getProject("dd672e84-91bd-4dcd-9df2-d852dfdcaba9")
    const p1 = Project("Test Project for add todo")
    console.log(project1)

    p1.addTodo(first_project_todo);



    console.log(project1)

    const sidebar_todos = document.getElementById("sidebar-todos")

    const projects_html = document.getElementById("projects");


    const PROJECT_LIST_HTML = document.getElementById("project-list")
    const PROJECT_LIST_ITEMS = PROJECT_LIST_HTML.querySelectorAll("li")

    console.log(PROJECT_LIST_HTML)


    projects_html.addEventListener("click", () => {
        hideSection(PROJECT_LIST_HTML)
    })

    sidebar_todos.addEventListener("click",generateAllTodos)

    
    console.log(PROJECT_LIST_ITEMS)
    

    generateAllTodos();
})
console.log(getAllTodos())
getAllProjects()


