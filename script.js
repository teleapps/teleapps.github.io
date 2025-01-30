let currentIndex = 0;
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
let startX = 0;

function moveSlide(direction) {
    const slideWidth = cards[0].offsetWidth + 20; 
    currentIndex = (currentIndex + direction + totalCards) % totalCards; 

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Обработка жестов свайпа
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    e.preventDefault(); 
});

slider.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let swipeThreshold = 50; 
    if (startX - endX > swipeThreshold) {
        moveSlide(1); 
    } else if (endX - startX > swipeThreshold) {
        moveSlide(-1); 
    }
});


window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        moveSlide(1);
    } else if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});


window.onload = () => {
    slider.style.transform = 'translateX(0px)';
};

