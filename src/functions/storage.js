
import {Todo } from "./todoClasses";



// Generates an array of every TODO 

function addProject(project_name) {
    const existing_projects = JSON.parse(localStorage.getItem("Projects"))
    const lowercase_projects = existing_projects.map(element => {
        return element.toLowerCase();
    })
    if (lowercase_projects.includes(project_name.toLowerCase())) {
        return false
    } else {
        existing_projects.push(project_name);
        localStorage.setItem("Projects", JSON.stringify(existing_projects))
    }
}

function getAllProjects() {
    return JSON.parse(localStorage.getItem("Projects"))
}

function getAllTodos()  {
    const todo_list = [];
    const storage_keys = Object.keys(localStorage);
    storage_keys.forEach((key) => {
        if (key !== "Projects") {
            todo_list.push(JSON.parse(localStorage.getItem(key)))
        }
    })
    return todo_list;
}

function getProjectTodos(project_name) {
    const project_todos = [];
    getAllTodos().forEach((todo) => {
        if (todo.project === project_name) {
            project_todos.push(todo);
        }
    })
    return project_todos
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



// Returns a list of todos based on a status for example if (status -> todo.urgent === value -> true)
function getStatusTodos(status, value) {
    const all_todos = getAllTodos();
    const status_todos = [];
    for (let todo of all_todos) {
        if (todo[status] === value) {
            status_todos.push(todo)
        }
    }
    return status_todos
}



function defaultStorage() {
    localStorage.clear()
    localStorage.setItem("Projects", JSON.stringify([]))

    addProject("Project1");
    addProject("Project2");

    let todo1 = new Todo("Project1","Todo1","First todo", "2022-12-31",false,);
    let todo2 = new Todo("Project1","Todo2", "Second todo", "1939-09-01",true,);
    let todo3 = new Todo("Project2","Todo3", "Third Todo", "2022-07-04",true,true);


    todo1.addTodo();
    todo2.addTodo();
    todo3.addTodo()

}

function removeTodo(project_id,todo_id) {
    const project = JSON.parse(localStorage.getItem(project_id)).project_todos;
    console.log(project)
    delete project[todo_id];
}

export {defaultStorage, getAllProjects, getAllTodos, getProjectTodos, getStatusTodos, addProject}