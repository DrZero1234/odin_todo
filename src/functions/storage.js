
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

export {getAllTodos, getAllProjects, getProject, resetStorage}