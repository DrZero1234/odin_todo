import "./styles/style.css"
import {Todo,Project} from "./functions/todoClasses.js"
import {getTodos, getProjects, resetStorage} from "./functions/storage.js"

// lel

document.addEventListener("DOMContentLoaded", () => {
    resetStorage();

    const project1 = Project("Project1");
    const project2 = Project("Project2");

    project1.addProject();
    project2.addProject();
})
console.log(`Projects: ${JSON.parse(getTodos())}`)
console.log("Testing")