import contentHeader from "./contentHeader";

const content = (function () {
	const contentDiv = document.getElementById("content")
	let selected;
	let card;
	
	function select(project, newCard) {
		selected = project;
		card = newCard
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
		init();
	}

	return { select }
})();

export default content;