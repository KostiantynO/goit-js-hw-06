const counterRef = document.querySelector('#counter');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;
valueRef.textContent = counterValue;

const decrement = () => {
  counterValue -= 1;
  updateUI();
};

const increment = () => {
  counterValue += 1;
  updateUI();
};

const updateUI = () => (valueRef.textContent = counterValue);

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
