const containerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const createCollectionBtn = document.querySelector('button[data-create]');
const destroyCollectionBtn = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

containerRef.classList.add('boxes');
let counter = 0;

const createBoxes = amount => {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const sizes = `${30 + 10 * counter}px`;

    box.classList.add('box');
    box.style.width = sizes;
    box.style.height = sizes;
    box.textContent = sizes;
    box.style.fontSize = `${(30 + 10 * counter) / 4}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;

    boxes.push(box);

    counter += 1;
  }

  containerRef.append(...boxes);
};

const createCollection = () => createBoxes(inputRef.value);

const destroyCollection = () => {
  containerRef.innerHTML = '';
  counter = 0;
};

createCollectionBtn.addEventListener('click', createCollection);
destroyCollectionBtn.addEventListener('click', destroyCollection);
