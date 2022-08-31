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







emailInput.addEventListener('input', () => {
    errMsg.style.display = 'none';
  });
  
  passwordInput.addEventListener('input', () => {
    errMsg.style.display = 'none';
  });
  