import sidebar from "./components/sidebar/sidebar"

const domHandler = (function () {
	function init() {
		sidebar.open()
	}

	return {init}
})()

export default domHandler