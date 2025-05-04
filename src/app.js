import Projects from "./projects";

const app = (function () {
	const ProjectsList = [];

	function addNewProject() {
		let newProject = new Projects();
		ProjectsList.push(newProject);
		console.log(`added new item ${newProject.title}, to ${ProjectsList}`)
		return (ProjectsList[ProjectsList.indexOf(newProject)])
	}

	function getProjectList() {
		return ProjectsList
	}

	return { addNewProject, getProjectList }
})();

export default app;