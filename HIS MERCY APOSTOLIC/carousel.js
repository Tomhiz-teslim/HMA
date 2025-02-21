const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlideIndex = 0;

function changeSlide() {
    // Remove the active class from all slides
    carouselSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Add the active class to the current slide
    carouselSlides[currentSlideIndex].classList.add('active');

    // Update the index for the next slide
    currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
}

// Start the carousel
setInterval(changeSlide, 3000); // Change every 3 seconds