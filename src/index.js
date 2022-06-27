import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getAllTodos, getAllProjects, getProject, getTodo, resetStorage, getProjectTodos, defaulStorage} from "./functions/storage.js"
import {generateAllTodos,generateAllProjects, hideSection, toggleModal} from "./functions/DOMFunctions.js"

// lel

document.addEventListener("DOMContentLoaded", () => {

    // defaulStorage()

    console.log("Projects")
    console.log(getAllProjects())

    console.log("Project Todos")
    console.log(getProjectTodos(getAllProjects()[0].id))

    console.log("Todos")
    console.log(getAllTodos())



    generateAllProjects()


    const sidebar_todos = document.getElementById("sidebar-todos")
    const projects_html = document.getElementById("projects");

    // Project Modal toggle
    const new_project_btn = document.getElementById("new-project-btn")
    new_project_btn.addEventListener("click", toggleModal)

    const close_modal_btn = document.querySelector(".close-button");
    close_modal_btn.addEventListener("click",toggleModal)

    const create_project_btn = document.querySelector(".create-project-btn");
    create_project_btn.addEventListener("click", () => {
        const name_field = String(document.getElementById("project-name").value)
        const new_project = new Project(name_field);

        // TODO redirect to new Project TODO´s after Creating a project
        new_project.storeProject();
        const stored_project = getProject(new_project.id);
        toggleModal();
        generateAllTodos(Array.from(stored_project.project_todos));
        
    })




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



