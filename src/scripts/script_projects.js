import {navbar} from './elements/navbar';

function chooseCategory() {
    const types = document.querySelectorAll('.type');
    const items = document.querySelectorAll('.item');

    function reset() {
        items.forEach((i) => {
            i.style.display = 'none';
        })
    }

    types.forEach((e) => {
        e.addEventListener('click' , () => {
            const type = e.dataset.type;
            const elements = document.querySelectorAll(`.${type}`);

            if(type == 'all') {
                items.forEach((i) => {
                    i.style.display = 'block';
                })
            } else {

                reset()

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