const content = (function () {
	let selected;
	
	function select(project) {
		selected = project;
	}

	return { select }
})();

export default content;