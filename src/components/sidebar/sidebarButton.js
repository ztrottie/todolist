import sidenavImg from "../../assets/icons/side_navigation.svg"
import sidebar from "./sidebar";

export default function sidebarButton() {
	const button = document.createElement("button");

	button.id = "sidebarButton";

	button.addEventListener("click", () => {
		sidebar.toggle();
	})

	const buttonImg = document.createElement("img");
	buttonImg.src = sidenavImg

	button.appendChild(buttonImg);
	return button;
}