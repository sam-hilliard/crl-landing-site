const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--show')) {
        nav.classList.remove('nav--show');
    }

    else {
        nav.classList.add('nav--show');
    }
});