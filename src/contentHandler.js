
const contentHandler = (function () {
	let selected;
	const contentDiv = document.getElementById("content");

	function setSelected(project) {
		selected = project;
		console.log(`title: ${selected.title}`)
		refresh();
	}

	function createProjectTitle() {
		const TitleHeader = document.createElement("input");
		TitleHeader.type = "text";
		TitleHeader.placeholder = "New Project";

		return TitleHeader;
	}

	function createContentHeading() {
		const contentHeading = document.createElement("div");

		contentHeading.appendChild(createProjectTitle());

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