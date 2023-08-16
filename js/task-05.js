const field = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

field.addEventListener('input', onInputChange)

function onInputChange(event) {
    text.textContent = event.currentTarget.value;
}