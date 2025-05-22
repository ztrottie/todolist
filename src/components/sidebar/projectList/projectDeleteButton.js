import app from "../../../app/app";
import projectList from "./projectList";
import deletImg from "../../../assets/icons/delete.svg"

export default function projectDeleteButton(project) {
	const button = document.createElement("button");
	button.classList.add("clickable")
	button.classList.add("projectDeleteButton");

	button.addEventListener("click", (e) => {
		e.stopPropagation();
		app.removeProject(project);
		projectList.update();
	})

	const buttonImg = document.createElement("img");
	buttonImg.src = deletImg;
	
	button.appendChild(buttonImg);
	return button;
}