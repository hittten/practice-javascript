// manage open and close nav
const header = document.querySelector('header');

document.querySelector('#icon-open')
    .addEventListener('click', () => header.classList.add('nav-open'));

[
    document.querySelector('main'),
    document.querySelector('#icon-close'),
    ...document.querySelectorAll('nav a')
]
    .forEach(item =>
        item.addEventListener('click', () =>
            header.classList.contains('nav-open') ?
                header.classList.remove('nav-open') : ''
        ));
