

const Project = (name) => {

    let project_todos = [];

    const addProject = () => {
        if (localStorage.getItem("Projects") == null) {
            localStorage.setItem("Projects", "[]")
        }

        const project_storage = JSON.parse(localStorage.getItem("Projects"))
        const project =  {name,project_todos}
        project_storage.push(project)
        localStorage.setItem("Projects", JSON.stringify(project_storage))
    }

    return {name, project_todos, addProject};
}


const Todo = (title,description,date,priority,status="unfinised") => {


    return {title,description,date,priority,status}
}

export {Project,Todo}
