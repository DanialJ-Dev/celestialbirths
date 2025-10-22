// Add this JavaScript for toggling the mobile menu and icon
var menuIcon = document.getElementById("menu-icon");
var navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", function () {
    navList.classList.toggle("menu-open");
    if (navList.classList.contains("menu-open")) {
        menuIcon.innerHTML = "&times;";
    } else {
        menuIcon.innerHTML = "&#9776;";
    }
});

// Add this event listener to close the menu when clicking outside
document.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
        navList.classList.remove("menu-open");
        menuIcon.innerHTML = "&#9776;";
    }
});