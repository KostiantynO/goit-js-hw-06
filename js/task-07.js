const inputRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

textRef.style.fontSize = `${inputRef.value}px`;

const inputValueToTextSize = event => (textRef.style.fontSize = `${event.currentTarget.value}px`);

inputRef.addEventListener('input', inputValueToTextSize);
