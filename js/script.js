window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navi'),
        menuItem = document.querySelectorAll('.navi_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navi_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navi_active');
        })
    })
})