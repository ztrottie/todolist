import sidebarHandler from "./sidebarHandler";
import app from "./app";
import contentHandler from "./contentHandler";

const domHandler = (function () {
	function openSidebar() {
		sidebarHandler.open();
	}

	function refresh() {
		
	}
	return { openSidebar }
})();

export default domHandler