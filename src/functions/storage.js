import { Project,Todo } from "./todoClasses";


function resetStorage() {
    localStorage.clear()
}

function getAllTodos() {

}

function getAllProjects() {
    return JSON.parse(localStorage.getItem("Projects"))
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
            return todo
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
    console.log(p1)
    console.log("lel")


}

export {getAllTodos, getAllProjects, getProject, getTodo, resetStorage, defaulStorage}