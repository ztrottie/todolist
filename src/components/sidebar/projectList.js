export default function createProjectDiv() {
	const projectsDiv = document.createElement("div");
	projectsDiv.id = "projectsDiv"
	
	const newProjectButton = document.createElement("button");
	newProjectButton.id = "newProjectButton";
	newProjectButton.textContent = "New project";

	newProjectButton.addEventListener("click", () => {
		const newProject = app.addNewProject();
		contentHandler.setSelected(newProject);
		refresh();
	})

	const projectList = document.createElement("div");
	projectList.id = "projectsListDiv";

	projectsDiv.appendChild(newProjectButton);
	projectsDiv.appendChild(projectList);

	return projectsDiv;
}