import deleteImg from ".//assets/icons/delete.svg"
import app from "../app";
import contentHandler from "./contentHandler";

const sidebarHandler = (function () {
	const sidebarDiv = document.getElementById("sidebar");
	let opened = true;


	function refresh() {
		if (opened) {
			cleanProjectDiv();
			const projectsListDiv = document.getElementById("projectsListDiv");
			const projectList = app.getProjectList();
			console.log("another project");
			for (let i = 0; projectList[i]; i++) {
				const projectDiv = document.createElement("div");
				projectDiv.classList.add("projectListItem");

				const title = document.createElement("p");
				title.textContent = (projectList[i].title === "") ? "New Project" : projectList[i].title; 

				const deleteButton = document.createElement("button");
				const buttonImg = document.createElement("img");
				buttonImg.src = deleteImg;

				deleteButton.appendChild(buttonImg);

				projectDiv.appendChild(title);
				projectDiv.appendChild(deleteButton);

				projectsListDiv.appendChild(projectDiv);
			}
		}
	}

	function cleanProjectDiv() {
		const projectsDiv = document.getElementById("projectsListDiv");

		while (projectsDiv.firstChild) {
			projectsDiv.removeChild(projectsDiv.firstChild);
		}
	}
	
	function open() {
		sidebarDiv.className = "openedSidebar";

		const headerDiv = createSidebarHeader();

		const headerTitle = document.createElement("h2");
		headerTitle.textContent = "Projects";

		headerDiv.appendChild(headerTitle);
		headerDiv.appendChild(createSidebarButton());

		const addProjectDiv = createProjectDiv();

		sidebarDiv.appendChild(headerDiv);
		sidebarDiv.appendChild(addProjectDiv);
	}

	function close() {
		sidebarDiv.className = "closedSidebar";

		const headerDiv = createSidebarHeader();


		headerDiv.appendChild(createSidebarButton());
		sidebarDiv.appendChild(headerDiv);
	}

	function clear() {
		while (sidebarDiv.firstChild) {
			sidebarDiv.removeChild(sidebarDiv.firstChild);
		}
	} 


	return { open, refresh }
})();

export default sidebarHandler