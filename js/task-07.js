const inputRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

const inputHandler = e => (textRef.style.fontSize = `${e.target.value}px`);

inputRef.addEventListener('input', inputHandler);
