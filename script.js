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
  const sidebarWidth = viewportWidth > 900 ? '27%' : '100%'; // Adjust threshold as needed

  // Toggle sidebar width and adjust content margin accordingly
  sidebar.style.width = sidebar.style.width === sidebarWidth ? '0' : sidebarWidth;
  content.style.marginLeft = sidebar.style.width === '25%' ? '0' : '0';
}

// loader

window.addEventListener("load", () =>{
  const loader = document.querySelector(".loader")

  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
  });
});

// VIDEO PAUSE BUTTON

// Get the video
var video = document.getElementById("galary_vid");
// Get the button
var btn = document.getElementById("pause_btn");
// Pause and play the video, and change the button text
function vid_pause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "PAUSE";
  } else {
    video.pause();
    btn.innerHTML = "PLAY";
  }
}

// gallery

const images = document.querySelectorAll('.container img');
images.forEach(image => {
    image.addEventListener('click', function() {
        const enlargedSrc = this.src.replace('thumbnail', 'large');
        window.open(enlargedSrc, '_blank');
    });
});
