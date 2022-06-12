const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav .container ul");
const navCon = document.querySelector("header .container-fluid");

toggle.addEventListener('click', function () {
	nav.classList.toggle("slide");
});

toggle.addEventListener('click', function () {
	navCon.classList.toggle("noshadow");
});
