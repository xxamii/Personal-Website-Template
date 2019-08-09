import {navbar} from './elements/navbar';

function validation() {
    const inputs = document.forms[0].getElementsByTagName('input');

    Array.prototype.forEach.call(inputs , el => {
        el.addEventListener('blur' , () => {
            const val = el.value;
            const message = document.createElement('p');

            if (val == '') {
                message.classList.add('validate-err');
                message.innerText += 'Fill in the form, please.';

                el.parentNode.insertBefore(message, el.nextSibling);

                setTimeout(() => {
                    message.remove();
                }, 4000);

            } else {
                message.classList.add('validate-pass');
                message.innerText += 'Fine.';

                el.parentNode.insertBefore(message, el.nextSibling);

                setTimeout(() => {
                    message.remove();
                }, 4000);
            }
        })
    });
}

function app() {
    navbar()
    validation()
}

app()