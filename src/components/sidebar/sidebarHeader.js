import sidebarButton from "./sidebarButton";

export default function sidebarHeader() {
	const headerDiv = document.createElement("div");
	headerDiv.classList.add("sidebarHeader");

	const title = document.createElement("h2");
	title.textContent = "Projects";

	const button = sidebarButton();

	headerDiv.appendChild(title);
	headerDiv.appendChild(button);

	return headerDiv
}