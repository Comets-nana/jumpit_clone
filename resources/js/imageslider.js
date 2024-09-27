let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = 100;  // 슬라이드의 너비를 100%로 설정

function showSlide(index) {
    currentIndex = index % totalSlides;
    slides.style.transition = 'transform 1s ease';
    slides.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// 마지막 슬라이드에서 첫 번째 슬라이드로 부드럽게 넘어가도록 수정
slides.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0%)';
    }
});

// 자동 슬라이드 기능
let slideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 4000);

function moveSlide(direction) {
    clearInterval(slideInterval);
    showSlide(currentIndex + direction);
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000);
}