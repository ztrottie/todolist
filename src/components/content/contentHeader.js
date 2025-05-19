import projectList from "../sidebar/projectList/projectList";

export default function contentHeader(selected) {
	const headerDiv = document.createElement("div");
	headerDiv.classList.add("contentHeaderDiv");

	const title = document.createElement("input");
	title.placeholder = "New Project";
	title.value = selected.title;

	title.addEventListener("keyup", () => {
		selected.title = title.value;
	})

	const desc = document.createElement("input");
	desc.value = selected.desc;
	desc.placeholder = "Description..."
	desc.addEventListener("keyup", () => {
		selected.desc = desc.value;
	})

	headerDiv.appendChild(title);
	headerDiv.appendChild(desc);
	return headerDiv;
}