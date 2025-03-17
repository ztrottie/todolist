export default function initializeSearchBar() {
	const searchBar = document.querySelector(".searchBar");
	searchBar.addEventListener("click", (e) => {
		console.log("searchbar touched");
		if (e.target.nodeName === "DIV" || e.target.nodeName === "INPUT") {
			const input = document.getElementById("searchBarInput");
			input.focus();
		}
	})
}
