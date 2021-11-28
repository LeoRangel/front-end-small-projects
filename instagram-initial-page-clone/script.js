// Get lenght of slides
const totalSlides = document.querySelectorAll('.instagram-slides img').length;
const totalSlides2 = document.querySelectorAll('.instagram-slides img');

// Set initial slide
let currentSlide = 0;

function goNextSlide() {
    // Remove 'current-slide' class of current slide
    totalSlides2[currentSlide].classList.remove('current-slide');
    // Update to next slide
    currentSlide++;

    // Go to first slide if current slide is the last
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    // Add 'current-slide' class to new current slide
    totalSlides2[currentSlide].classList.add('current-slide');
}

// Set time interval to next slide
setInterval(goNextSlide, 3000);