import {navbar} from './elements/navbar';

function chooseCategory() {
    const types = document.querySelectorAll('.type');
    const items = document.querySelectorAll('.item');

    function reset() {
        items.forEach((i) => {
            i.style.display = 'none';
        })
        types.forEach(i => {
            i.classList.remove('active');
        })
    }

    types.forEach((e) => {
        e.addEventListener('click' , () => {
            const type = e.dataset.type;
            const elements = document.querySelectorAll(`.${type}`);

            if(type == 'all') {
                reset()
                e.classList.add('active');
                items.forEach((i) => {
                    i.style.display = 'block';
                })
            } else {

                reset()
                e.classList.add('active');
                elements.forEach((el) => {
                    el.style.display = 'block';
                })
            }
        })
    })
}

function app() {
    navbar()
    chooseCategory()
}

app()