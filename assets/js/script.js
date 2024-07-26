document.addEventListener('DOMContentLoaded', () => {
    const menubtn = document.querySelector('.menu-hamburger');
    const navItems = document.querySelector('.menu-items');

    menubtn.addEventListener('click', () => {
        navItems.classList.toggle('menu-items-toggle');
    });
});
