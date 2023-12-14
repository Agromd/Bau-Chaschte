
const themeSwitcher = document.getElementById('theme-switch');

themeSwitcher.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-mode-variables');
});
    // You might need to apply different styles to specific elements based on the theme
    // You can use document.querySelectorAll or getElement(s)ByClassName/Id
    // For example:
    // const elementsToUpdate = document.getElementsByClassName('theme-dependent-element');
    // for (const element of elementsToUpdate) {
    //    element.classList.toggle('dark-theme-style');
    // }
