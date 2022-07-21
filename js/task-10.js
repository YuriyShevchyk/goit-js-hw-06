function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const colorBox = document.querySelector('#boxes');
const amount = document.querySelector('input');


createButton.addEventListener('click', onCreateBoxes);
destroyButton.addEventListener('click', onDectroyButton);

function onCreateBoxes() {

  let numberArray = [];
  for (let i = 1; i <= amount.value; i += 1) {
    numberArray.push(i);
  };
  // console.log(numberArray);
  const boxes = numberArray.forEach(number=> {
    const createBox  = document.createElement('div');
    const value = (20 + number * 10);
    createBox.style.width = `${value}px`;
    createBox.style.height = `${value}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    return createBox;
    }); 
  colorBox.append(...boxes);
};

function onDectroyButton() {
  colorBox.innerHTML = '';
  amount.value = '';
}

