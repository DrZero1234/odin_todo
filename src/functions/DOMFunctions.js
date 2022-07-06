import { stringify } from "uuid";
import {
  getAllProjects,
  getAllTodos,
  getProjectTodos,
  getStatusTodos,
  getTodo,
  removeTodo,
} from "./storage.js";
import { Todo } from "./todoClasses.js";

const clearSection = (section = TODOS_HTML) => {
  const TODOS_HTML = document.querySelector(".todos");
  while (section.firstChild) {
    section.removeChild(section.lastChild);
  }
};

const toggleTodoModal = () => {
  const modal = document.getElementById("todo-modal");
  const overlay_div = document.getElementById("overlay");

  if (
    modal.classList.contains("active") &&
    overlay_div.classList.contains("active")
  ) {
    modal.classList.remove("active");
    overlay_div.classList.remove("active");
  } else {
    modal.classList.add("active");
    overlay_div.classList.add("active");
  }
};

const generateAllTodos = (todo_list = getAllTodos()) => {
  const TODOS_HTML = document.querySelector(".todos");
  const TODOS_WRAPPER = document.querySelector(".todo-wrapper");

  clearSection(TODOS_HTML);

  // Does not add button if click on "Todos" sidebar menu
  if (todo_list.sort().join(",") === getAllTodos().sort().join(",")) {
    clearSection(TODOS_WRAPPER);
  }

  todo_list.forEach((todo) => {
    const todo_div = document.createElement("div");
    todo_div.className = "todo";
    todo_div.id = todo.id;

    const todo_status_div = document.createElement("div");
    todo_status_div.className = "todo-status";

    const todo_priority_elem = document.createElement("span");
    todo_priority_elem.id = "priority";
    if (todo.urgent === true) {
      todo_priority_elem.textContent = "!";
    }

    const todo_title_elem = document.createElement("h3");
    todo_title_elem.id = "todo-title";
    todo_title_elem.textContent = todo.title;

    const todo_description_elem = document.createElement("span");
    todo_description_elem.id = "todo-description";
    todo_description_elem.textContent = todo.description;

    const todo_date_elem = document.createElement("span");
    todo_date_elem.id = "todo";
    todo_date_elem.textContent = todo.date;

    const todo_actions_div = document.createElement("div");

    todo_actions_div.className = "todo-actions";

    // TODO probably will need to change the IMG src

    const completed_element = document.createElement("img");
    completed_element.id = "completed-todo";
    completed_element.setAttribute("src", "completed.png");
    completed_element.setAttribute("alt", "Completed");

    const edit_element = document.createElement("img");
    edit_element.className = "edit-todo";
    edit_element.id = todo.id;
    edit_element.setAttribute("src", "edit.png");
    edit_element.setAttribute("alt", "Edit");

    edit_element.addEventListener("click", () => {
      toggleTodoModal();
      document.getElementById("new-todo-title").textContent =
        "Edit Todo";
      const edit_btn = document.getElementById("create-todo-btn");
      edit_btn.textContent = "Edit";
      let edited_todo = getTodo(edit_element.id);
      console.log(edited_todo);

      document.getElementById("todo-name").value = edited_todo.title;
      document.getElementById("new-todo-description").value =
        edited_todo.description;
      document.getElementById("todo-date").value = edited_todo.date;
      if (todo.urgent) {
        document.getElementById("todo-priority").checked = true;
      } else {
        document.getElementById("todo-priority").checked = false;
      }

      const todo_modal = document.getElementById("todo-modal");
      todo_modal.addEventListener("submit", () => {
        let edited_todo = getTodo(edit_element.id);
        edited_todo.title =
          document.getElementById("todo-name").value;
        edited_todo.description = document.getElementById(
          "new-todo-description"
        ).value;
        edited_todo.date = document.getElementById("todo-date").value;
        if (document.getElementById("todo-priority").checked) {
          edited_todo.urgent = true;
        } else {
          edited_todo.urgent = false;
        }
        localStorage.setItem(
          edited_todo.id,
          JSON.stringify(edited_todo)
        );
      });
    });

    const delete_element = document.createElement("img");
    delete_element.className = "delete-todo";
    delete_element.id = todo.id;
    delete_element.setAttribute("src", "delete.png");
    delete_element.setAttribute("alt", "Delete");
    if (todo.title === "Placeholder Todo") {
      delete_element.style.pointerEvents = "none";
      delete_element.style.opacity = 0.35;
    }

    delete_element.addEventListener("click", () => {
      let todo_project = getTodo(delete_element.id).project;
      removeTodo(delete_element.id);
      generateAllTodos(getProjectTodos(todo_project));
    });

    const finsished_element = document.createElement("img");
    finsished_element.className = "finished-todo";
    finsished_element.id = todo.id;
    finsished_element.setAttribute("src", "finished.png");
    finsished_element.setAttribute("alt", "Todo finsihed");

    finsished_element.addEventListener("click", () => {
      todo = getTodo(finsished_element.id);
      if (todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
      localStorage.setItem(todo.id, JSON.stringify(todo));
      generateAllTodos(getProjectTodos(todo.project));
    });

    if (todo.completed) {
      todo_status_div.appendChild(completed_element);
    }
    todo_status_div.appendChild(todo_priority_elem);

    todo_actions_div.appendChild(edit_element);
    todo_actions_div.appendChild(delete_element);
    todo_actions_div.appendChild(finsished_element);

    todo_div.appendChild(todo_status_div);
    todo_div.appendChild(todo_title_elem);
    todo_div.appendChild(todo_description_elem);
    todo_div.appendChild(todo_date_elem);
    todo_div.appendChild(todo_actions_div);

    TODOS_HTML.appendChild(todo_div);
  });
};

const generateAllProjects = () => {
  const TODOS_HTML = document.querySelector(".todos");

  const PROJECTS_HTML = document.getElementById("project-list");

  const PROJECT_LIST = getAllProjects();

  const TODO_WRAPPER = document.querySelector(".todo-wrapper");

  //clearSection(PROJECTS_HTML);

  const project_title_html = document.createElement("h2");
  project_title_html.id = "todos-title";

  const new_project_button = document.createElement("button");
  new_project_button.id = "new-project-btn";
  new_project_button.textContent = "New Project";
  PROJECTS_HTML.appendChild(new_project_button);

  PROJECT_LIST.forEach((project) => {
    clearSection(TODO_WRAPPER);

    const project_item = document.createElement("li");
    project_item.textContent = project;

    // TODO OPEN THE PROJECT & GENERATE ITS TODOS
    project_item.addEventListener("click", () => {
      //clearSection(TODOS_HTML)
      clearSection(TODO_WRAPPER);

      const add_todo_btn = document.createElement("button");
      add_todo_btn.className = "add-todo";
      add_todo_btn.id = project;
      add_todo_btn.textContent = "+ Add Todo";
      TODO_WRAPPER.appendChild(add_todo_btn);

      add_todo_btn.addEventListener("click", () => {
        toggleTodoModal();

        const todo_modal = document.getElementById("todo-modal");
        todo_modal.addEventListener("submit", () => {
          const name_field =
            document.getElementById("todo-name").value;
          const description_field = document.getElementById(
            "new-todo-description"
          ).value;
          const date_field =
            document.getElementById("todo-date").value;
          const todo_priority_field =
            document.getElementById("todo-priority");

          let priority;
          if (todo_priority_field.checked) {
            priority = true;
          } else {
            priority = false;
          }

          const new_todo = new Todo(
            project,
            name_field,
            description_field,
            date_field,
            priority
          );
          new_todo.addTodo();

          // TODO redirect to new Project TODO´s after Creating a project

          generateAllTodos(getProjectTodos(project));
        });
      });

      project_title_html.textContent = project;

      TODO_WRAPPER.appendChild(project_title_html);

      const project_todos = getProjectTodos(project);

      generateAllTodos(project_todos);

      // changes the title of the todos_title field
    });
    PROJECTS_HTML.appendChild(project_item);
  });
};

const toggleProjectModal = () => {
  const modal = document.getElementById("project-modal");
  const overlay_div = document.getElementById("overlay");

  if (
    modal.classList.contains("active") &&
    overlay_div.classList.contains("active")
  ) {
    modal.classList.remove("active");
    overlay_div.classList.remove("active");
  } else {
    modal.classList.add("active");
    overlay_div.classList.add("active");
  }
};

const generateStatusTodos = (status, value) => {
  let message = function (status) {
    switch (status) {
      case "urgent":
        return "Urgent";
      case "completed":
        return "Completed";
      case "date":
        return "Today´s";
    }
  };

  const todo_wrapper_html = document.querySelector(".todo-wrapper");
  clearSection(todo_wrapper_html);
  let todos_title_html = document.getElementById("todos-title");
  if (todos_title_html) {
    todos_title_html.textContent = `${message} todos`;
  } else {
    // adds the title for the todo-list manually
    const todo_wrapper_html = document.querySelector(".todo-wrapper");
    const todo_title_elem = document.createElement("h2");
    todo_title_elem.id = "todo-title";
    todo_title_elem.textContent = `${message(status)} todos`;
    todo_wrapper_html.appendChild(todo_title_elem);
  }

  generateAllTodos(getStatusTodos(status, value));
};

export {
  generateAllProjects,
  generateAllTodos,
  generateStatusTodos,
  toggleProjectModal,
  toggleTodoModal,
};
