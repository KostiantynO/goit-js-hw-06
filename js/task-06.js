const inputRef = document.querySelector('#validation-input');

const isLengthValid = ({ currentTarget: { classList, value, dataset } }) => {
  value.length === parseInt(dataset.length)
    ? classList.add('valid') & classList.remove('invalid')
    : classList.add('invalid') & classList.remove('valid');
};

inputRef.addEventListener('blur', isLengthValid);
