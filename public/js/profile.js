fetch('/profile').then((res) => res.json()).then((res) => {
  if (res.massage) {
    window.location.href = res.massage;
  }
});
