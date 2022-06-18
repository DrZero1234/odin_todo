import { getTodos,getProjects } from "./storage"

const TODO_LIST = getTodos();



// Clears the content of an HTML element
const hideSection = (section) => {
    if(section.className === "active") {
        section.className = "inactive"
    } else {
        section.className = "active"
    }
}


const clearSection =  (section) => {
    while (section.firstChild) {
        section.removeChild(section.lastChild)
    }
}

const generateAllTodos = () => {
    const TODOS_HTML = document.querySelector(".todos")

    console.log(TODOS_HTML)

    clearSection(TODOS_HTML)

    TODO_LIST.forEach((todo) => {
        const todo_div = document.createElement("div");
        todo_div.className = "todo";

        const todo_priority_elem = document.createElement("span");
        todo_priority_elem.id = "priority";
        if (todo.priority === "urgent") {
            todo_priority_elem.textContent = "!"
        }

        const todo_title_elem = document.createElement("h3");
        todo_title_elem.id = "todo-title";
        todo_title_elem.textContent = todo.title

        const todo_description_elem = document.createElement("span");
        todo_description_elem.id = "todo-description"
        todo_description_elem.textContent = todo.description

        const todo_date_elem = document.createElement("span");
        todo_date_elem.id = "todo";
        todo_date_elem.textContent = todo.date;

        const todo_actions_div = document.createElement("div");
        todo_actions_div.className = "todo-actions";

        // TODO probably will need to change the IMG src

        const edit_element = document.createElement("img")
        edit_element.id = "edit-todo"
        edit_element.setAttribute("src","edit.png");
        edit_element.setAttribute("alt", "Edit")

        const delete_element = document.createElement("img")
        delete_element.id = "del-todo"
        delete_element.setAttribute("src","delete.png");
        delete_element.setAttribute("alt", "Delete")

        todo_actions_div.appendChild(edit_element);
        todo_actions_div.appendChild(delete_element)

        todo_div.appendChild(todo_priority_elem);
        todo_div.appendChild(todo_title_elem);
        todo_div.appendChild(todo_description_elem);
        todo_div.appendChild(todo_date_elem)
        todo_div.appendChild(todo_actions_div)



        TODOS_HTML.appendChild(todo_div);

    })

}

const generateAllProjects =  () => {
    
    const PROJECTS_HTML = document.getElementById("project-list");

    const PROJECT_LIST = getProjects()

    clearSection(PROJECTS_HTML);

    const new_project_button = document.createElement("button");
    new_project_button.id = "new-project"
    new_project_button.textContent = "New Project";
    PROJECTS_HTML.appendChild(new_project_button)

    PROJECT_LIST.forEach((project) => {
        const project_item = document.createElement("li");
        project_item.textContent = project.name;


        // TODO OPEN THE PROJECT & GENERATE ITS TODOS
        project_item.addEventListener("click", () => {

        })
        PROJECTS_HTML.appendChild(project_item)

    })
}
        // TODO HTML structure
            /*

                <div class="todo">
                    <span id="priority">!</span>
                    <h3 id="todo-title">Title</h3>
                    <span id="todo-description">This is a test</span>
                    <span id="todo-date">2022.06.12</span>
                    <div class="todo-actions">
                        <img src="edit.png" alt="Edit" id="edit-todo">
                        <img src="delete.png" alt="Delete Todo" id="del-todo">
                    </div>
                </div>
    */


export {generateAllTodos, generateAllProjects, hideSection}