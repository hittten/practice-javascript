// manage open and close nav
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

openMenuButton.addEventListener('click', function () {
    header.classList.add('nav-open');
});

closeMenuButton.addEventListener('click', closeNav);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        closeNav();
    });
}

main.addEventListener('click', closeNav);
