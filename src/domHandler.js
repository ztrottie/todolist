import sidebarHandler from "./sidebarHandler";
import app from "./app"; 

const domHandler = (function () {
	function openSidebar() {
		sidebarHandler.open();
	}
	return { openSidebar }
})();

export default domHandler