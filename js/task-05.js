const inputRef = document.querySelector('#name-input');
console.log('inputRef', inputRef);
const outputRef = document.querySelector('#name-output');
console.log('outputRef', outputRef);

const inputHandler = () => {
  outputRef.textContent = `${inputRef.value}` === '' ? 'Anonymous' : `${inputRef.value}`;
};

inputRef.addEventListener('input', inputHandler);
