import sideNavImg from "../../assets/icons/close.svg"

export default function sidebarButton() {
		const sidebarButton = document.createElement("button");
		sidebarButton.classList.add("sidebarButton");

		sidebarButton.addEventListener("click", () => {
			if (opened) {
				clear();
				close();
			} else {
				open();
			}
			opened = !opened;
		})

		
		const sidebarButtonImg = document.createElement("img");
		sidebarButtonImg.src = sideNavImg;
		
		sidebarButton.appendChild(sidebarButtonImg);
		return sidebarButton;
	}