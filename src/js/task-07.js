const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

input.addEventListener('input', onChangeSpanText);

function onChangeSpanText(event) {
    // input.scroll = event.currentTarget.value;
    spanText.styles.fontSize = event.currentTarget.value + 'px';
}

