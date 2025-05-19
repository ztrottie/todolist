import Projects from "./projects";

const app = (function () {
	const projectList = [];

	function addProject() {
		const project = new Projects();
		projectList.push(project);
		console.log(projectList);
	}

	function removeProject(project) {
		const index = projectList.indexOf(project);

		if (index >= 0) {
			projectList.splice(index, 1);
		}
	}

	function getList() {
		return projectList;
	}
	
	return {addProject, getList, removeProject}
})();

export default app