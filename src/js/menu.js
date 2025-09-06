const burgerMenu = document.getElementById("burgerMenu");
const menu = document.querySelector("nav.menu");
const mainContent = document.querySelector("main");

burgerMenu.addEventListener("click", function() {
    menu.classList.toggle("active");
    mainContent.classList.toggle("blur");
});

