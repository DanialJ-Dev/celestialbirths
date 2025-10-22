// Function to open the pop-up
function openPopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "block";
}

// Function to close the pop-up
function closePopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "none";
}

// Event listener to open the pop-up when clicking the "About us" link
document.getElementById("about-link").addEventListener("click", openPopup);
