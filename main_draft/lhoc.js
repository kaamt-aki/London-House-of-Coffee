// JavaScript to create a simple image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Optional: Add event listeners for navigation buttons
document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('nextButton').addEventListener('click', nextSlide);