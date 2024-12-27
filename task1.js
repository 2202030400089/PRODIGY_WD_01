document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const navItems = document.querySelectorAll('.nav-item a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });
});