window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.home__nav'),
    menuItem = document.querySelectorAll('.home__item'),
    hamburger = document.querySelector('.home__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('home__hamburger_active');
        menu.classList.toggle('home__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('home__hamburger_active');
            menu.classList.toggle('home__nav_active');
        })
    })
})