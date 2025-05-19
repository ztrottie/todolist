import app from "../../app/app.js"
import projectList from "./projectList/projectList.js";

export default function addProjectButton() {
	const button = document.createElement("button");

	button.textContent = "Add Project";
	button.addEventListener("click", () => {
		app.addProject();
		projectList.update();
	})
	return button;
}