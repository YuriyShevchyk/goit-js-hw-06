const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${input.value}px`;

input.addEventListener('input', onChangeSpanText);

function onChangeSpanText(event) {
    // input.scroll = event.currentTarget.value;
    spanText.style.fontSize = `${input.value}px`;
}

