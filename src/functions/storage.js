
function resetStorage() {
    localStorage.setItem("Projects", JSON.stringify([]));
    localStorage.setItem("Todos", JSON.stringify([]));
}

function getTodos() {
    return JSON.parse(localStorage.getItem("Todos"))
}

function getProjects() {
    return JSON.parse(localStorage.getItem("Projects"))
}

export {getTodos, getProjects, resetStorage}