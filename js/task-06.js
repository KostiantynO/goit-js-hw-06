const inputRef = document.querySelector('#validation-input');

const isLengthValid = ({ currentTarget: { classList, value, dataset } }) => {
  value.length < dataset.length
    ? classList.add('invalid') & classList.remove('valid')
    : classList.add('valid') & classList.remove('invalid');
};

inputRef.addEventListener('blur', isLengthValid);
