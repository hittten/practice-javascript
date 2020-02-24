const openMenuButton = document.querySelector('#icon-open');
const closeMenuButton = document.querySelector('#icon-close');
const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');
const main = document.querySelector('main');

function closeNav() {
    if (header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
    }
}

openMenuButton.addEventListener('click', () => {
    header.classList.add('nav-open');
});

const closeElements = [main, closeMenuButton, ...links];
closeElements.forEach(link => {
    link.addEventListener('click', closeNav);
});
