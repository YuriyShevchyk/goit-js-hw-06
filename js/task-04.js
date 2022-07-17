const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const clickMinus = () => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
}

const clickPlus = () => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}

plusBtn.addEventListener("click", clickPlus);
minusBtn.addEventListener("click", clickMinus);