(function() {
    // Function to update the service status based on the current time
    function updateServiceStatus() {
        const services = document.querySelectorAll('.service');
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const today = now.toLocaleString('en-US', { weekday: 'long' });

        services.forEach(service => {
            const day = service.dataset.day;
            const startTime = service.dataset.start.split(':');
            const endTime = service.dataset.end.split(':');

            const startHour = parseInt(startTime[0]);
            const startMinute = parseInt(startTime[1]);
            const endHour = parseInt(endTime[0]);
            const endMinute = parseInt(endTime[1]);

            if (day === today) {
                // Check if the service is ongoing
                if (
                    (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
                    (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute))
                ) {
                    updateServiceStatusText(service, 'Ongoing', 'ongoing');
                } 
                // Check if the service is upcoming
                else if (currentHour < startHour || (currentHour === startHour && currentMinute < startMinute)) {
                    updateServiceStatusText(service, 'Upcoming', 'upcoming');
                } 
                // Service is past but only for the rest of the day
                else {
                    updateServiceStatusText(service, 'Past', 'past');
                }
            } 
            // For services on other days, always show upcoming
            else if (isDayBefore(today, day)) {
                updateServiceStatusText(service, 'Upcoming', 'upcoming');
            }
        });
    }

    // Helper function to update status text and class
    function updateServiceStatusText(service, text, className) {
        const statusElement = service.querySelector('.status');
        statusElement.textContent = text;
        statusElement.className = `status ${className}`;
    }

    // Helper function to check if the service is on a later day in the week
    function isDayBefore(today, serviceDay) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const todayIndex = daysOfWeek.indexOf(today);
        const serviceDayIndex = daysOfWeek.indexOf(serviceDay);

        // If the service day is after today, it's upcoming
        return serviceDayIndex > todayIndex || (serviceDayIndex === todayIndex && serviceDay !== today);
    }

    // Update service status every minute
    setInterval(updateServiceStatus, 60000);
    updateServiceStatus();

    // Hamburger Menu Toggle for mobile view
    const menuButton = document.getElementById('menu-btn');
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            document.getElementById('navBar').classList.toggle('show');
        });
    }

    // Change header background color on scroll
    const dynamicNav = document.getElementById('head');
    function changeBackColor() {
        if (window.scrollY > 20) {
            dynamicNav.classList.add("head-active");
        } else {
            dynamicNav.classList.remove("head-active");
        }
    }

    window.addEventListener("scroll", changeBackColor);

    // Highlight the active link based on the current page
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
    const aboutPages = ['history.html', 'miss-and-vis.html', 'belief.html', 'structure.html'];

    function highlightActiveLink() {
        // Remove 'active' class from all links before applying it to the current one
        navLinks.forEach(link => link.classList.remove('active'));

        if (currentPage === '' || currentPage === 'index.html') {
            const homeLink = document.querySelector('nav ul li a[href="./index.html"]');
            if (homeLink) homeLink.classList.add('active');
        } else if (aboutPages.includes(currentPage)) {
            const aboutLink = document.getElementById('about');
            if (aboutLink) aboutLink.classList.add('active');

            navLinks.forEach(link => {
                const linkPage = link.href.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        } else {
            navLinks.forEach(link => {
                const linkPage = link.href.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        }
    }

    highlightActiveLink();

    // Open and close the navbar for mobile view
    const myNavBar = document.getElementById("navBar");
    const openBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close");

    function toggleNavBar() {
        if (myNavBar) {
            myNavBar.style.display = (myNavBar.style.display === "none" || myNavBar.style.display === "") ? "flex" : "none";
        }
    }

    if (openBtn) openBtn.addEventListener('click', toggleNavBar);
    if (closeBtn) closeBtn.addEventListener('click', toggleNavBar);

    // Dropdown Menu Toggle for "ABOUT US"
    const aboutLink = document.getElementById('about');
    const dropdownIcon = document.getElementById('dropdownIcon');
    const dropdownContent = document.getElementById('navdrop');
    const closeButton = document.getElementById('cl');

    function toggleDropdown(event) {
        event.preventDefault(); // Prevent default action if needed
        if (dropdownContent) {
            dropdownContent.classList.toggle('show');
        }
    }

    function closeDropdown() {
        if (dropdownContent) {
            dropdownContent.classList.remove('show');
        }
    }

    if (aboutLink) aboutLink.addEventListener('click', toggleDropdown);
    if (dropdownIcon) dropdownIcon.addEventListener('click', toggleDropdown);
    if (closeButton) closeButton.addEventListener('click', closeDropdown);
})();
