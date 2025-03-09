let menu = document.getElementById("menu");
let bar1 = document.getElementById("bar-1");
let bar2 = document.getElementById("bar-2");
let bar3 = document.getElementById("bar-3");
let navMenu = document.getElementById("nav-menu");
let navOverlay = document.getElementById("nav-menu-container");
let navLinksMobile = document.querySelectorAll(".nav-link-mobile");

document.addEventListener("DOMContentLoaded",()=>{
            function toggleMenu() {
                bar1.classList.toggle("bar-1-animation");
                bar2.classList.toggle("bar-2-animation");
                bar3.classList.toggle("bar-3-animation");
                navMenu.classList.toggle("nav-menu-show");
                navOverlay.classList.toggle("nav-menu-container-hidden");
                navOverlay.classList.toggle("nav-menu-container-fadeIn");
            }
            menu.addEventListener("click", toggleMenu);
            navLinksMobile.forEach(link => {
                link.addEventListener("click", toggleMenu);
            });
            
            document.addEventListener("click", (event) => {
                if (!navMenu.contains(event.target) && !menu.contains(event.target) && navMenu.classList.contains("nav-menu-show")) {
                    toggleMenu();
                }
            });
            
})