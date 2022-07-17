// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на button.change - color
//    і виводить значення кольору в span.color.
const colorName = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const widget = document.querySelector('.widget');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  widget.setAttribute('style', `background-color: ${color}`)
  colorName.textContent = color;
}

btn.addEventListener("click", onChangeColor);
