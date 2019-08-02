function slider() {
    const slides = document.querySelectorAll('.slide-picture');
    const indicators = document.querySelectorAll('.slider-indicator');
    const title = document.querySelector('.img-title');
    const descr = document.querySelector('.img-desc');

    function reset() {
        slides.forEach(el => {
            el.classList.remove('current');
        });
        indicators.forEach(el => {
            el.classList.remove('active');
        });
    }

    indicators.forEach(el => {
        el.addEventListener('click' , () => {
            reset();
            const cur = el.dataset.slideTo;
            const curSlide = slides[cur];
            const curImg = curSlide.children[0];
            const head = curImg.dataset.header;
            const desc = curImg.dataset.description;
            
            el.classList.add('active');
            curSlide.classList.add('current');
            title.textContent = head;
            descr.textContent = desc;
        })
    })
}

function navbar() {
    const nav = document.querySelector('.navigation');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click' , () => {
        nav.classList.toggle('show');
    })
}

function app() {
    slider()
    navbar()
}

app()