import {v4 as uuidv4} from "uuid";

class Project {
    constructor(name) {
        this.id = uuidv4()
        this.project_todos = new Array();
        this.name = name
    }

    storeProject() {
        localStorage.setItem(this.id, JSON.stringify(this));
        return this
    }

    pushTodo(todo)  {
        this.project_todos.push(JSON.stringify(todo))
        localStorage.setItem(this.id, JSON.stringify(this))

    };
}

class Todo {
    constructor(title,description,date,priority,status="unfinished"){
        this.id = uuidv4()
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = status
    }

}

/*
const Todo = (title,description,date,priority,status="unfinished") => {

    const id = uuidv4()

    const storeTodo = () => {

        const todo_storage = JSON.parse(localStorage.getItem("Todos"));
        const todo = {id,title,description,date,priority,status};
        todo_storage.push(todo);
        localStorage.setItem("Todos", JSON.stringify(todo_storage));
    }

    return {id,title,description,date,priority,status,storeTodo}
}

*/

export {Project,Todo}
