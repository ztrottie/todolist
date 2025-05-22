import app from "../../../app/app";
import Projects from "../../../app/projects";
import content from "../../content/content";
import projectDiv from "./projectDiv";

const projectList = (function () {
	const projectMap = new Map();
	let projectListDiv;
	let selected;
	function init() {
		projectListDiv = document.getElementById("projectListDiv");
		const projectList = app.getList();
		let isSelectedThere = false;
		for (const item of projectList) {
			if (selected && selected == item) {
				isSelectedThere = true;
			}
			const card = projectDiv(item);
			projectListDiv.appendChild(card);
			projectMap.set(item, card); 
		}
		if (selected && !isSelectedThere) {
			content.select(undefined);
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

	function getSelected() {
		return selected;
	}

	function setSelected(newProject) {
		selected = newProject;
	}

	return { init, update, updateItem, setSelected, getSelected }
})();

export default projectList