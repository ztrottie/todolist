import content from "../../content/content";
import projectDeleteButton from "./projectDeleteButton";
import projectList from "./projectList";

export default function projectDiv(project) {
	const projectDiv = document.createElement("div");
	projectDiv.classList.add("projectDiv");
	projectDiv.classList.add("clickable")

	projectDiv.addEventListener("mouseover", () => {
		projectDiv.style.backgroundColor = "var(--overBackground)";
	})

	projectDiv.addEventListener("mouseout", () => {
		projectDiv.style.backgroundColor = "";
	})

	projectDiv.addEventListener("click", (e) => {
		content.select(project);
		projectList.setSelected(project);
		console.log(`Selecting ${project.title}`);
	})

	const title = document.createElement("p");
	title.textContent = (project.title === "") ? "New Project" : project.title;

	projectDiv.appendChild(title);
	projectDiv.appendChild(projectDeleteButton(project));
	return projectDiv
}