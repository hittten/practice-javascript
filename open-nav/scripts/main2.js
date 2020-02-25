const header = document.querySelector('header');

document.querySelector('#icon-open').onclick = () => header.classList.add('nav-open');

[
    document.querySelector('main'),
    document.querySelector('#icon-close'),
    ...document.querySelectorAll('nav a'),
].forEach(link =>
    link.onclick = () =>
        header.classList.remove('nav-open')
);
