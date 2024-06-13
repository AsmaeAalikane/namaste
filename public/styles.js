const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}
