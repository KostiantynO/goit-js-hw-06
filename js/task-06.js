const inputRef = document.querySelector('#validation-input');

const isLengthValid = ({ currentTarget: { classList, value, dataset } }) => {
  if (value.length !== parseInt(dataset.length)) {
    classList.add('invalid') & classList.remove('valid');
  } else {
    classList.add('valid') & classList.remove('invalid');
  }
};

inputRef.addEventListener('blur', isLengthValid);
