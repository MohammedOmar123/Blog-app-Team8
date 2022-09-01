const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const username = document.querySelector('.username');
const signUpBtn = document.querySelector('.signUpBtn');

const signUpPost = () => {
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      username: username.value,
      password: password.value,
      password2: password2.value,
    }),
  })
    .then((res) =>{
      console.log(res, 'from then')
      return res.json()
    })
    .then((res) => {
      if (res.path) {
        window.location.href = res.path;
      } else {
        console.log(res.msg);
      }
    })
    .catch((error) => console.log(error));
};
signUpBtn.addEventListener('click', () => {
  if (validation()) {
    signUpPost();
  }
});

signUpBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    validation();
  }
});

const handleError = (input, msg) => {
  const small = input.nextElementSibling;
  small.textContent = `*${msg}`;
  small.style.visibility = 'visible';
};

const succeed = (input) => {
  const small = input.nextElementSibling;
  small.style.visibility = 'hidden';
};
const validateEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  email,
);
const validatePassword = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

const validation = () => {
  const emailVal = { value: email.value.trim(), valid: false };
  const passwordVal = { value: password.value.trim(), valid: false };
  const usernameVal = { value: username.value.trim(), valid: false };
  const password2Val = { value: password2.value.trim(), valid: false };

  if (emailVal.value === '') {
    handleError(email, 'You must fill this filed by your email');
  } else if (!validateEmail(emailVal.value)) {
    handleError(email, 'Please enter a valid email address');
  } else {
    succeed(email);
    emailVal.valid = true;
  }

  if (usernameVal.value === '') {
    handleError(username, 'You must fill this filed by your username');
  } else {
    succeed(username);
    usernameVal.valid = true;
  }

  if (passwordVal.value === '') {
    handleError(password, 'You must fill this field by your password!');
  } else if (!validatePassword(passwordVal.value)) {
    handleError(
      password,
      'Must contain at least a digit,an uppercase,a lowercase letter,and 6 charctars',
    );
  } else {
    succeed(password);
    passwordVal.valid = true;
  }
  // checking confirmed password
  if (password2Val.value === '') {
    handleError(password2, 'You must confirm your password in this field!');
  } else if (passwordVal.value !== password2Val.value) {
    handleError(password2, "Passwords don't match");
  } else {
    succeed(password2);
    password2Val.valid = true;
  }
  if (emailVal.valid === false || usernameVal.valid === false || passwordVal.valid === false || password2Val.valid === false) { return false; }
  return true;
};
