const searchBarInput = document.getElementById("searchBarInput")
const searchBar = document.querySelector(".searchBar");
const searchImg = document.getElementById("searchImg");
searchBarInput.addEventListener("focus", () => {
	searchBar.classList.add("searchOutline");
	searchImg.classList.add(".imgFilter");
})

searchBarInput.addEventListener("blur", () => {
	searchBar.classList.remove("searchOutline");
	searchImg.classList.remove(".imgFilter")
})
