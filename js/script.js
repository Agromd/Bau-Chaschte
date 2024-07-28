// theme swither tool
// const themeSwitcher = document.getElementById('theme-switch');

// themeSwitcher.addEventListener('change', () => {
//     document.documentElement.classList.toggle('dark-mode-variables');
// });
// You might need to apply different styles to specific elements based on the theme
// You can use document.querySelectorAll or getElement(s)ByClassName/Id
// For example:
// const elementsToUpdate = document.getElementsByClassName('theme-dependent-element');
// for (const element of elementsToUpdate) {
//    element.classList.toggle('dark-theme-style');
// }


// sidebar menu

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');

  // Calculate sidebar width based on viewport size
  const viewportWidth = window.innerWidth;
  const sidebarWidth = viewportWidth > 900 ? '47%' : '100%'; // Adjust threshold as needed

  // Toggle sidebar width and adjust content margin accordingly
  sidebar.style.width = sidebar.style.width === sidebarWidth ? '0' : sidebarWidth;
  content.style.marginLeft = sidebar.style.width === '25%' ? '0' : '0';
}

// gallery
const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}



function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
