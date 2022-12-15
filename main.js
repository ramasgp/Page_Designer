let navbar = document.getElementById("nav");
window.onscroll = () => {
    "use strict";
    if(document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
}