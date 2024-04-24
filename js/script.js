const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function moveSlide(slideIndex) {
  currentSlide = slideIndex;
  images.forEach((img, i) => img.style.transform = `translateX(${currentSlide - i} * 100%)`);
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    moveSlide(currentSlide - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < images.length - 1) {
    moveSlide(currentSlide + 1);
  }
});
