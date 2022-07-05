import "./styles/style.css";
import {defaultStorage, getAllTodos, addProject} from "./functions/storage.js";
import {generateAllProjects, generateAllTodos ,generateStatusTodos, toggleProjectModal, toggleTodoModal} from "./functions/DOMFunctions.js";
import {getToday} from "./functions/otherFunctions.js"
import {Todo,Project} from "./functions/todoClasses.js"

document.addEventListener("DOMContentLoaded", () => {


    let todo_placeholder = new Todo("Project1", "Placeholder Todo", "Description", "1900-01-01")
    addProject("Project1");
    todo_placeholder.addTodo()

    generateAllProjects();
    console.log(getAllTodos());
    generateAllTodos()

    const new_project_btn = document.getElementById("new-project-btn")
    new_project_btn.addEventListener("click", toggleProjectModal)

    const create_project_btn = document.querySelector(".create-project-btn");
    create_project_btn.addEventListener("click", () => {


        const name_field = String(document.getElementById("project-name").value)
        addProject(name_field);
        // TODO redirect to new Project TODO´s after Creating a project
        toggleProjectModal()
    })

    const close_project_modal = document.getElementById("close-project")
    close_project_modal.addEventListener("click", toggleProjectModal)
    const close_todo_modal = document.getElementById("close-todo")
    close_todo_modal.addEventListener("click", toggleTodoModal)


    const sidebar_todos = document.getElementById("sidebar-todos")

    sidebar_todos.addEventListener("click", () => {
        generateAllTodos()

        const todo_wrapper = document.querySelector(".todo-wrapper")
        const todos_title_html = document.getElementById("todos-title")
        if (todos_title_html) {
            todos_title_html.textContent = "Every Todos"
        } else {
            let title_elem = document.createElement("h2");
            title_elem.id = "todos-title";
            title_elem.textContent = "All todos";
            todo_wrapper.appendChild(title_elem);
        }

        
    })

    const urgent_todos_html = document.getElementById("urgent-todos")
    const completed_todos_html = document.getElementById("completed-todos")
    const today_todos_html = document.getElementById("date-todos")
        // Generates the urgent todo list to the HTML by clicking the Urgent sidebar menu
        urgent_todos_html.addEventListener("click", () => {       
            generateStatusTodos("urgent", true)
        })
    
        // The list of completed todos in the HTML
        completed_todos_html.addEventListener("click", () => {
            generateStatusTodos("completed", true)
        })
    
        // The list of completed today´s todos in HTML
        today_todos_html.addEventListener("click", () => {
            generateStatusTodos("date", getToday())
        })
})

/*

    console.log(getStatusTodos("urgent", true))


    console.log("Projects")
    console.log(getAllProjects())

    console.log("Project Todos")
    console.log(getProjectTodos(getAllProjects()[0].id))

    console.log("Todos")
    console.log(getAllTodos())



    generateAllProjects()

    const todo_wrapper_html = document.querySelector(".todo-wrapper")

    const sidebar_todos = document.getElementById("sidebar-todos")
    const projects_html = document.getElementById("projects");

    const urgent_todos_html = document.getElementById("urgent-todos")
    const completed_todos_html = document.getElementById("completed-todos")
    const today_todos_html = document.getElementById("date-todos")


    // Generates the urgent todo list to the HTML by clicking the Urgent sidebar menu
    urgent_todos_html.addEventListener("click", () => {       
        generateStatusTodos("urgent", true)
    })

    // The list of completed todos in the HTML
    completed_todos_html.addEventListener("click", () => {
        generateStatusTodos("completed", true)
    })

    // The list of completed today´s todos in HTML
    today_todos_html.addEventListener("click", () => {
        generateStatusTodos("date", getToday())
    })





    // Project Modal toggle
    const new_project_btn = document.getElementById("new-project-btn")
    new_project_btn.addEventListener("click", toggleProjectModal)

    const close_project_modal = document.getElementById("close-project")
    close_project_modal.addEventListener("click", toggleProjectModal)
    const close_todo_modal = document.getElementById("close-todo")
    close_todo_modal.addEventListener("click", toggleTodoModal)


    const create_project_btn = document.querySelector(".create-project-btn");
    create_project_btn.addEventListener("click", () => {


        const name_field = String(document.getElementById("project-name").value)
        const new_project = new Project(name_field);

        // TODO redirect to new Project TODO´s after Creating a project
        new_project.storeProject();
        console.log(new_project)
        const stored_project = getProject(new_project.id);
        toggleProjectModal()
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
 */

