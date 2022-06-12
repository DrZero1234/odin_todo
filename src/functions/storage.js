
function resetStorage() {
    localStorage.setItem("Projects", JSON.stringify([]));
    localStorage.setItem("Todos", JSON.stringify([]));
}

function getTodos() {
    return localStorage.getItem("Todos")
}

function getProjects() {
    return localStorage.getItem("Projects")
}

export {getTodos, getProjects, resetStorage}