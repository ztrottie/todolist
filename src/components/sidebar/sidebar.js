import addProjectButton from "./addProjectButton";
import projectList from "./projectList/projectList";
import sidebarButton from "./sidebarButton";
import sidebarHeader from "./sidebarHeader";

const sidebar = (function () {
	const sidebarDiv = document.getElementById("sidebar");
	let opened = true;

	function open() {
		sidebarDiv.classList.remove("closedSidebar");
		sidebarDiv.classList.add("openedSidebar");

		sidebarDiv.appendChild(sidebarHeader());

		sidebarDiv.appendChild(addProjectButton())

		const sidebarProjectList = document.createElement("div");
		sidebarProjectList.id = "projectListDiv";

		sidebarDiv.appendChild(sidebarProjectList);
		projectList.init();
		opened = true;
	}

	function clear() {
		while (sidebarDiv.firstChild) {
			sidebarDiv.removeChild(sidebarDiv.firstChild)
		}
	}

	function close() {
		sidebarDiv.classList.remove("openedSidebar");
		sidebarDiv.classList.add("closedSidebar");

		sidebarDiv.appendChild(sidebarButton());
		opened = false;
	}

	function toggle() {
		clear()
		if (opened) {
			close();
		} else {
			open();
		}
	}

	return {open, toggle}
})()

export default sidebar