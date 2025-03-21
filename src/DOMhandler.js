import "./css/sideBar.css"

const DOMhandler = (function () {
	const content = document.getElementById("content");
	function showSideBar() {
		const openSideBar = document.createElement("div");
		openSideBar.classList.add("openSideBar")

		

		content.appendChild(openSideBar)
	}

	return {showSideBar}
})();

export default DOMhandler;