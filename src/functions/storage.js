import { toggleModal } from "./DOMFunctions";
import { Project,Todo } from "./todoClasses";



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



function defaulStorage () {
    localStorage.clear()

    let p1 = new Project("Project1")
    let p2 = new Project("Project2")

    let todo1 = new Todo("Todo1","First todo", "2022-12-31",false,);
    let todo2 = new Todo("Todo2", "Second todo", "1939-09-01",true,);
    let todo3 = new Todo("Todo3", "Third Todo", "2022-07-03",true,true);

    p1.storeProject();
    p2.storeProject();
    todo1.addTodo(p1);
    todo2.addTodo(p1);
    todo3.addTodo(p2)
    todo1.addTodo(p2);

}

function removeTodo(project_id,todo_id) {
    const project = JSON.parse(localStorage.getItem(project_id)).project_todos;
    console.log(project)
    delete project[todo_id];

}

export {getAllTodos, getAllProjects, getProject, getTodo, defaulStorage, getProjectTodos,getStatusTodos, removeTodo}