const burgerMenu = document.getElementById("burgerMenu");
const menu = document.querySelector("nav.menu");
burgerMenu.addEventListener("click", function() {
    menu.classList.toggle("active"); 
});
