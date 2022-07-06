import { v4 as uuidv4 } from "uuid";
import { getAllTodos } from "./storage";

class Todo {
  constructor(project, title, description, date, urgent = false) {
    this.id = uuidv4();
    this.project = project;
    this.title = title;
    this.description = description;
    this.date = date;
    this.urgent = urgent;
    this.completed = false;
  }

  addTodo() {
    let todo_titles = getAllTodos().map((element) => {
      return element.title;
    });
    if (todo_titles.includes(this.title) === false) {
      localStorage.setItem(this.id, JSON.stringify(this));
    }
  }
}

export { Todo };
