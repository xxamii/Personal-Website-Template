function blogPageTransition() {
    const pages = document.querySelectorAll('.posts-page');
    const indicators = document.querySelectorAll('.pages-indicator');

    function reset() {
        pages.forEach(el => {
            el.style.display = 'none';
        })
        indicators.forEach(el => {
            el.classList.remove('active');
        })
    }

    indicators.forEach(i => {
        i.addEventListener('click' , () => {
            reset()
            const current = i.dataset.openedPage;
            i.classList.add('active');
            pages[current].style.display = 'block';
        })
    })
    
}

function app() {
    blogPageTransition()
}

app()