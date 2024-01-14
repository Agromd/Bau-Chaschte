
const themeSwitcher = document.getElementById('theme-switch');

themeSwitcher.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-mode-variables');
});

const slider = document.querySelector('.galary-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
    // You might need to apply different styles to specific elements based on the theme
    // You can use document.querySelectorAll or getElement(s)ByClassName/Id
    // For example:
    // const elementsToUpdate = document.getElementsByClassName('theme-dependent-element');
    // for (const element of elementsToUpdate) {
    //    element.classList.toggle('dark-theme-style');
    // }
