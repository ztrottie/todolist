import contentHeader from "./contentHeader";

const content = (function () {
	const contentDiv = document.getElementById("content")
	let selected;
	
	function select(project) {
		selected = project;
		update();
	}

	function clear() {
		while (contentDiv.firstChild) {
			contentDiv.removeChild(contentDiv.firstChild)
		}
	}

	function init() {
		contentDiv.appendChild(contentHeader(selected))
	}

	function update() {
		clear();
		if (selected)
			init();
	}

	return { select }
})();

export default content;