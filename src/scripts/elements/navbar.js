export function navbar() {
    const nav = document.querySelector('.navigation');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click' , () => {
        nav.classList.toggle('show');
        hamburger.classList.toggle('opened');
    })
}