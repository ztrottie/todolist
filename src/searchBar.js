import blackSearchImg from "./img/searchBlack.svg"
import searchImg from "./img/search.svg"
import "./css/searchBar.css"

const searchBarInput = document.getElementById("searchBarInput")
const searchBar = document.querySelector(".searchBar");
const searchImgTag = document.getElementById("searchImg");
searchBarInput.addEventListener("focus", () => {
	searchBar.style.borderColor = "black";
	searchImgTag.src = blackSearchImg;
})

searchBarInput.addEventListener("blur", () => {
	searchBar.style.borderColor = "var(--main-bg)";
	searchImgTag.src = searchImg
})
