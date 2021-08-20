var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var contanier = document.querySelector(".container");

menuIcon.onclick = function(){
	sidebar.classList.toggle("small-sidebar");
	contanier.classList.toggle("large-container");
}
