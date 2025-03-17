const idGenerator = (function () {
	let idCount = 0;

	function newId() {
		return idCount++;
	}

	return { newId }
})();