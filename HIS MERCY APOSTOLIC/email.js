document.getElementById('chatForm').addEventListener('submit', function(event) {
    var userName = document.getElementById('userName').value;
    var userMessage = document.getElementById('userMessage').value;

    if (!userName || !userMessage) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});

const myNavBar = document.getElementById("navBar");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close");

function toggleNavBar() {
    myNavBar.style.display = (myNavBar.style.display === "none" || myNavBar.style.display === "") ? "flex" : "none";
}

openBtn.addEventListener('click', toggleNavBar);
if (closeBtn) closeBtn.addEventListener('click', toggleNavBar);

// Dropdown Menu Toggle for "ABOUT US"
const aboutLink = document.getElementById('about');
const dropdownIcon = document.getElementById('dropdownIcon');
const dropdownContent = document.getElementById('navdrop');
const closeButton = document.getElementById('cl');

function toggleDropdown(event) {
    event.preventDefault(); // Prevent default action if needed
    dropdownContent.classList.toggle('show');
}

function closeDropdown() {
    dropdownContent.classList.remove('show');
}

// Add event listeners to toggle and close the dropdown
if (aboutLink) aboutLink.addEventListener('click', toggleDropdown);
if (dropdownIcon) dropdownIcon.addEventListener('click', toggleDropdown);
if (closeButton) closeButton.addEventListener('click', closeDropdown);