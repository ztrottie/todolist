import sideNavImg from "./img/side_navigation.svg"

const sidebarHandler = (function () {
	const sidebarDiv = document.getElementById("sidebar");

	function createSidebarButton() {
		const sidebarButton = document.createElement("button");
		sidebarButton.classList.add(".sidebarButton");

		const sidebarButtonImg = document.createElement("img");
		sidebarButtonImg.src = sideNavImg;

		sidebarButton.appendChild(sidebarButtonImg);
		return sidebarButton;
	}

	function open() {
		sidebarDiv.classList.add("openSidebar");

		const headerDiv = document.createElement("div");
		headerDiv.classList.add("sidebarHeader");

		const headerTitle = document.createElement("h2");
		headerTitle.textContent = "Projects";

		headerDiv.appendChild(headerTitle);
		headerDiv.appendChild(createSidebarButton());

		sidebarDiv.appendChild(headerDiv);
	}


	return { open }
})();

export default sidebarHandler