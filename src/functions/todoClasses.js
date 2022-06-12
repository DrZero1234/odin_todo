// localStorage.setItem("Projects", JSON.stringify([]))

const Project = (name) => {

    function getProjects() {
        return JSON.parse(localStorage.getItem("Projects"))
    }

    return {name};


}

const Todo = (title,description,priority) => {

    function getTodos() {
        return JSON.parse(localStorage.getItem("Todos"))
    }

    return {title,description,priority}
}

export {Project,Todo}
