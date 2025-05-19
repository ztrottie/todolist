import app from "../../../app/app";
import Projects from "../../../app/projects";
import projectDiv from "./projectDiv";

const projectList = (function () {
	const projectMap = new Map();
	let projectListDiv;
	function init() {
		projectListDiv = document.getElementById("projectListDiv");
		const projectList = app.getList();
		for (const item of projectList) {
			const card = projectDiv(item);
			projectListDiv.appendChild(card);
			projectMap.set(item, card); 
		}
	}

	function clear() {
		projectMap.clear();
		while (projectListDiv.firstChild) {
			projectListDiv.removeChild(projectListDiv.firstChild);
		}
	}

	function update() {
		clear();
		init();
	}

	function updateItem(project) {
		const card = projectMap.get(project);
		if (!card) return;
		card.firstChild.textContent = (project.title === "") ? "New Project" : project.title;
	}

	return { init, update, updateItem }
})();

export default projectList