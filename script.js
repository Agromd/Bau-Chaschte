
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
  sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';

  const content = document.querySelector('.content');
  content.style.marginLeft = content.style.marginLeft === '250px' ? '0' : '250';
}

// loader

window.addEventListener("load", () =>{
  const loader = document.querySelector(".loader")

  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
  });
});
