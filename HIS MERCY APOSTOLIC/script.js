// Hamburger Menu Toggle for mobile view
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('navBar').classList.toggle('show');
});

// Change header background color on scroll
const dynamicNav = document.getElementById("head");

function changeBackColor() {
    if (window.scrollY > 20) {
        dynamicNav.classList.add("head-active");
    } else {
        dynamicNav.classList.remove("head-active");
    }
}

window.addEventListener("scroll", changeBackColor);


window.addEventListener("load", function() {
    const splashScreen = document.getElementById("splash-screen");
    splashScreen.style.opacity = "0";
    setTimeout(() => {
        splashScreen.style.display = "none";
    }, 3000); // Adjust timing as needed
});


// Highlight the active link based on the current page
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
const aboutPages = ['history.html', 'miss-and-vis.html', 'belief.html', 'structure.html'];

// Remove 'active' class from all links before applying it to the current one
navLinks.forEach(link => link.classList.remove('active'));

// Determine which link to highlight
if (currentPage === '' || currentPage === 'index.html') {
    // Highlight the home link
    const homeLink = document.querySelector('nav ul li a[href="./index.html"]');
    if (homeLink) homeLink.classList.add('active');
} else if (aboutPages.includes(currentPage)) {
    // Highlight "ABOUT US" if on an "About Us" page
    const aboutLink = document.getElementById('about');
    if (aboutLink) aboutLink.classList.add('active');

    // Highlight the specific dropdown link within the "ABOUT US" section
    navLinks.forEach(link => {
        const linkPage = link.href.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
} else {
    // Highlight the current link for other pages
    navLinks.forEach(link => {
        const linkPage = link.href.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Open and close the navbar for mobile view
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

document.addEventListener("DOMContentLoaded", function() {
    // Select all image, iframe, video, and embed elements
    const lazyElements = document.querySelectorAll('img, iframe, video, embed');
    
    // Add loading="lazy" attribute to each element
    lazyElements.forEach(element => {
      if (!element.hasAttribute('loading')) {
        element.setAttribute('loading', 'lazy');
      }
    });
  });

