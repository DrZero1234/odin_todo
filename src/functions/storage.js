import { toggleModal } from "./DOMFunctions";
import { Project,Todo } from "./todoClasses";


function resetStorage() {
    localStorage.clear()
}

// Generates an array of every TODO 
function getAllTodos() {
    const todo_arr = []

    for (let project of getAllProjects()) {
        for (let todo_key of Object.keys(project.project_todos) ) {
            todo_arr.push(JSON.parse(project.project_todos[todo_key]))
        }
    }

    return todo_arr

}


// Generates an array of every Project
function getAllProjects() {
    let arr = []    

    Object.keys(localStorage).forEach((key) => {
        arr.push(JSON.parse(localStorage.getItem(key)))
    })
    return arr

}

// Grabs a project with a specific ID
function getProject(project_id) {
    for (let project of getAllProjects()) {
        if (project.id === project_id) {
            return project
        }
    }
}


//Grabs a todo with a specific ID
function getTodo(todo_id) {
    for (let todo of getAllTodos()) {
        if (todo.id === todo_id) {
            return (todo)
        }
    }    
}


// Generates an array with all of the project´s todo Objects.


function getProjectTodos(project_id) {
    let project_todos = []
    let todo_keys = Object.keys(getProject(project_id).project_todos)
    todo_keys.forEach((key) => {
        project_todos.push(JSON.parse(getProject(project_id).project_todos[key]))
    })

    return project_todos

}

function defaulStorage () {
    resetStorage()

    let p1 = new Project("Project1")
    let p2 = new Project("Project2")

    let todo1 = new Todo("Todo1","First todo", "2022-12-31","normal");
    let todo2 = new Todo("Todo2", "Second todo", "1939-09-01","urgent");

    p1.storeProject();
    p2.storeProject();
    p1.pushTodo(todo1);
    p1.pushTodo(todo2);
    p2.pushTodo(todo1);

}

function ModalAddTodo() {
    const add_todo_btn = document.querySelector(".add-todo");
    add_todo_btn.addEventListener("click", () => {
        toggleModal()
    })
}

export {getAllTodos, getAllProjects, getProject, getTodo, resetStorage, defaulStorage, getProjectTodos}