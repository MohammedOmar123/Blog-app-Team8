const submitBtn = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errMsg = document.querySelector('#invalid-msg');

const passwordPattern = /^[A-Za-z0-9]/;
const emailPattern = /^[a-zA-Z]+@gmail.com$/;
const validateInput = (pattern, inputValue, errorMassage) => {
  if (pattern.test(inputValue)) {
    return true;
  }
  errMsg.textContent = errorMassage;
  return false;
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    validateInput(emailPattern, emailInput.value, 'Invalid Email')
      && validateInput(passwordPattern, passwordInput.value, 'Invalid Password')
  ) {
    errMsg.style.display = 'none';
    const header = {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    fetch('/login', header)
      .then((data) => {
        data.json().then((url) => {
          if (url.path === undefined) {
            errMsg.style.display = 'block';
            errMsg.textContent = url.result;
          } else {
            window.location.href = url.path;
          }
        });
      });
  } else {
    errMsg.style.display = 'block';
  }
});

emailInput.addEventListener('input', () => {
  errMsg.style.display = 'none';
});

passwordInput.addEventListener('input', () => {
  errMsg.style.display = 'none';
});
