import {v4 as uuidv4} from "uuid";

const Project = (name) => {

    let project_todos = [];
    let id = uuidv4()

    const storeProject = () => {
        /*

        if (localStorage.getItem("Projects") == null) {
            localStorage.setItem("Projects", "[]")
        }
        */

        const project_storage = JSON.parse(localStorage.getItem("Projects"))
        const project = {id,name, project_todos, storeProject};
        project_storage.push(project)
        localStorage.setItem("Projects", JSON.stringify(project_storage))
    }

    const addTodo = (todo) => {
        Project.project_todos.push(todo);
    }

    return {id,name, project_todos, storeProject,addTodo};
}


const Todo = (title,description,date,priority,status="unfinised") => {

    const id = uuidv4()

    const addTodo = () => {

        const todo_storage = JSON.parse(localStorage.getItem("Todos"));
        const todo = {id,title,description,date,priority,status};
        todo_storage.push(todo);
        localStorage.setItem("Todos", JSON.stringify(todo_storage));
    }

    return {id,title,description,date,priority,status,addTodo}
}

export {Project,Todo}
