const formRef = document.querySelector('.login-form');

const submitHandler = e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.target;

  if (email.value === '' || password.value === '') {
    window.alert('Please fill out all form fields.');
    return;
  }

  console.log({ email: email.value, password: password.value });
  e.target.reset();
};

formRef.addEventListener('submit', submitHandler);
