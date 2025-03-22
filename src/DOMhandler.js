import "./css/sideBar.css"
import "./img/"

const DOMhandler = (function () {
	const content = document.getElementById("content");
	
	
	function showSideBar() {
		const openSideBar = document.createElement("div");
		openSideBar.classList.add("openSideBar");
		
		const openCloseButton = document.createElement("button");
		const openCloseButtonImg = document.createElement("img");
		openCloseButtonImg.src = "";
		

		content.appendChild(openSideBar)
	}

	return {showSideBar}
})();

export default DOMhandler;