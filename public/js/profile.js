fetch('/userPosts').then((res) => console.log(res)).then((res) => {

  if (res.massage) {
    window.location.href = res.massage;
  }
});
