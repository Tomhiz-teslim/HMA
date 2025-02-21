// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

(function () {
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
})();
