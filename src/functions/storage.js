import { Project,Todo } from "./todoClasses";


function resetStorage() {
    localStorage.clear()
}

function getAllTodos() {
    const todo_arr = []

    for (let project of getAllProjects()) {
        for (let todo_key of Object.keys(project.project_todos) ) {
            todo_arr.push(JSON.parse(project.project_todos[todo_key]))
        }
    }

    return todo_arr

}

function getAllProjects() {
    let arr = []    

    Object.keys(localStorage).forEach((key) => {
        arr.push(JSON.parse(localStorage.getItem(key)))
    })
    return arr

}

function getProject(project_id) {
    for (let project of getAllProjects()) {
        if (project.id === project_id) {
            return project
        }
    }
}

function getTodo(todo_id) {
    for (let todo of getAllTodos()) {
        if (todo.id === todo_id) {
            return (todo)
        }
    }    
}

function defaulStorage () {
    resetStorage()

    let p1 = new Project("Project1")
    let p2 = new Project("Project2")

    let todo1 = new Todo("Todo1","First todo", "2022-12-31","normal");
    let todo2 = new Todo("Todo2", "Second todo", "1939-09-01","normal");

    p1.storeProject();
    p2.storeProject();
    p1.pushTodo(todo1);
    p1.pushTodo(todo2);
    p2.pushTodo(todo1);
    p2.pushTodo(todo2)

}

export {getAllTodos, getAllProjects, getProject, getTodo, resetStorage, defaulStorage}