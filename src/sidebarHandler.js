import sideNavImg from "./img/side_navigation.svg"

const sidebarHandler = (function () {
	const sidebarDiv = document.getElementById("sidebar");
	let opened = true;

	function createSidebarButton() {
		const sidebarButton = document.createElement("button");
		sidebarButton.classList.add(".sidebarButton");

		sidebarButton.addEventListener("click", () => {
			if (opened) {
				console.log("closing the sidebar...")
				clear()
				close();
			} else {
				console.log("opening the sidebar");
				clear()
				open();
			}
			opened = !opened;
		})

		
		const sidebarButtonImg = document.createElement("img");
		sidebarButtonImg.src = sideNavImg;
		
		sidebarButton.appendChild(sidebarButtonImg);
		return sidebarButton;
	}

	function createSidebarHeader() {
		const headerDiv = document.createElement("div");
		headerDiv.classList.add("sidebarHeader");
		return headerDiv;
	}

	function createAddProjectDiv() {
		const addProjectDiv = document.createElement("div");
		
		const newProjectButton = document.createElement("button");
		newProjectButton.id = "newProjectButton";
		newProjectButton.textContent = "New project";

		

		addProjectDiv.appendChild(newProjectButton);

		return addProjectDiv;
	}
	
	function open() {
		sidebarDiv.className = "openedSidebar";

		const headerDiv = createSidebarHeader();

		const headerTitle = document.createElement("h2");
		headerTitle.textContent = "Projects";

		headerDiv.appendChild(headerTitle);
		headerDiv.appendChild(createSidebarButton());

		const addProjectDiv = createAddProjectDiv();

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


	return { open }
})();

export default sidebarHandler