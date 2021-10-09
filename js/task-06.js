const inputRef = document.querySelector('#validation-input');

const isLengthValid = ({ target: { classList: c, value: v, dataset: d } }) => {
  v.length < d.length ? c.add('invalid') & c.remove('valid') : c.add('valid') & c.remove('invalid');
};

inputRef.addEventListener('blur', isLengthValid);
