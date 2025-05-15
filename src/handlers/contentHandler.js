import sidebarHandler from "./sidebarHandler";

const contentHandler = (function () {
	let selected;
	const contentDiv = document.getElementById("content");

	function setSelected(project) {
		selected = project;
		console.log(`title: ${selected.title}`)
		refresh();
	}

	function createProjectTitle() {
		const titleHeader = document.createElement("input");
		titleHeader.type = "text";
		titleHeader.placeholder = "New Project";
		titleHeader.addEventListener("input", (e) => {
			selected.title = e.target.value
			sidebarHandler.refresh();
			console.log(`The title is changed to ${selected.title}`)
		})

		return titleHeader;
	}

	function createProjectDesc() {
		const projectDesc = document.createElement("input");
		projectDesc.type = "text";
		projectDesc.placeholder = "Description...";
		projectDesc.addEventListener("input", (e) => {
			selected.desc = e.target.value
			console.log(`description changed to ${selected.desc}`)
		})
		return projectDesc
	}

	function createTaskDiv() {
		const taskDiv = document.createElement("div");
		taskDiv.id = "taskDiv"
		return taskDiv
	}

	function createContentHeading() {
		const contentHeading = document.createElement("div");

		contentHeading.appendChild(createProjectTitle());
		contentHeading.appendChild(createProjectDesc());
		contentHeading.appendChild(createTaskDiv());
		return contentHeading;
	}

	function refresh() {
		cleanContent();
		contentDiv.appendChild(createContentHeading());
	}

	function cleanContent() {
		while (contentDiv.firstChild) {
			contentDiv.removeChild(contentDiv.firstChild);
		}
	}

	return { setSelected, refresh };
})()

export default contentHandler