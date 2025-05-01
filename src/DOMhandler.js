import "./css/sideBar.css"
import sideNavButton from "./img/side_navigation.svg"

const DOMhandler = (function () {

	function showSideBar() {
		const sidebar = document.getElementById("sidebar");
		sidebar.classList.add("openSideBar");

		const heading = document.createElement("div");
		heading.classList.add("sideBarHeading");
		
		const sideBarHeader = document.createElement("h2");
		sideBarHeader.textContent = "Projects";

		heading.appendChild(sideBarHeader);

		const openCloseButton = document.createElement("button");
		const openCloseButtonImg = document.createElement("img");
		openCloseButtonImg.src = sideNavButton;
		openCloseButtonImg.id = openCloseButton;

		openCloseButton.appendChild(openCloseButtonImg);
		
		heading.appendChild(openCloseButton);

		sidebar.appendChild(heading)
	}

	return {showSideBar}
})();

export default DOMhandler;