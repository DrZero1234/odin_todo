import { Project,Todo } from "./todoClasses";


function resetStorage() {
    localStorage.setItem("Projects", JSON.stringify([]));
    localStorage.setItem("Todos", JSON.stringify([]));
}

function getAllTodos() {
    return JSON.parse(localStorage.getItem("Todos"))
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

function defaulStorage () {
    resetStorage()

    let p1 = Project("Project1")
    let p2 = Project("Project2")

    let todo1 = Todo("Todo1","First todo", "2022-12-31","normal");
    let todo2 = Todo("Todo2", "Second tood", "1939-09-01","normal");

    p1.storeProject();
    p2.storeProject();
    todo1.storeTodo();
    todo2.storeTodo()
}

export {getAllTodos, getAllProjects, getProject, resetStorage, defaulStorage}