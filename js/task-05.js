const field = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

field.addEventListener('input', onInputChange)

function onInputChange(event) {
    const fieldValue = event.currentTarget.value;

    text.textContent = fieldValue === "" ? "Anonymous" : fieldValue;
}