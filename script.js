// document.querySelectorAll('.accordion-header').forEach(header => {
//             header.addEventListener('click', () => {
//                 const item = header.parentElement;
//                 item.classList.toggle('active');
//             });
//         });


// let currentIndex = 0;
// const slider = document.querySelector('.slider');
// const cards = document.querySelectorAll('.card');
// const totalCards = cards.length;

// function moveSlide(direction) {
//     const slideWidth = cards[0].offsetWidth + 20; // Ширина карточки + gap
//     currentIndex += direction;

//     if (currentIndex >= totalCards) {
//         currentIndex = 0; // Возвращаемся к первому слайду
//     } else if (currentIndex < 0) {
//         currentIndex = totalCards - 1; // Переход к последнему слайду
//     }

//     slider.style.transition = 'transform 0.5s ease-in-out';
//     slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// // Устанавливаем начальное смещение
// window.onload = () => {
//     slider.style.transform = 'translateX(0px)';
// };


let currentIndex = 0;
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
let startX = 0;
let endX = 0;

function moveSlide(direction) {
    const slideWidth = cards[0].offsetWidth + 20; // Ширина карточки + gap
    currentIndex += direction;

    if (currentIndex >= totalCards) {
        currentIndex = 0; // Возвращаемся к первому слайду
    } else if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Переход к последнему слайду
    }

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Обработка жестов свайпа
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Минимальное расстояние для свайпа
    if (startX - endX > swipeThreshold) {
        moveSlide(1); // Свайп влево
    } else if (endX - startX > swipeThreshold) {
        moveSlide(-1); // Свайп вправо
    }
}

// Устанавливаем начальное смещение
window.onload = () => {
    slider.style.transform = 'translateX(0px)';
};
