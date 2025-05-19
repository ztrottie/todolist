import app from "../../../app/app";
import projectDiv from "./projectDiv";

const projectList = (function () {
	let projectListDiv;
	function init() {
		projectListDiv = document.getElementById("projectListDiv");
		const projectList = app.getList();
		for (const item of projectList) {
			projectListDiv.appendChild(projectDiv(item));
		}
	}

	function clear() {
		while (projectListDiv.firstChild) {
			projectListDiv.removeChild(projectListDiv.firstChild);
		}
	}

	function update() {
		clear();
		init();
	}
	return { init, update }
})();

export default projectList