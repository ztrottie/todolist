import content from "../../content/content";
import projectDeleteButton from "./projectDeleteButton";

export default function projectDiv(project) {
	const projectDiv = document.createElement("div");
	projectDiv.classList.add("projectDiv");

	projectDiv.addEventListener("mouseover", () => {
		projectDiv.style.backgroundColor = "var(--overBackground)";
	})

	projectDiv.addEventListener("mouseout", () => {
		projectDiv.style.backgroundColor = "";
	})

	projectDiv.addEventListener("click", (e) => {
		if (!e.target.classList.contains("ProjectDeleteButton")) {
			content.select(project);
			console.log(`Selecting ${project.title}`)
		} 
	})

	const title = document.createElement("p");
	title.textContent = (project.title === "") ? "New Project" : project.title;

	projectDiv.appendChild(title);
	projectDiv.appendChild(projectDeleteButton());
	return projectDiv
}