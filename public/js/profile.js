fetch('/userPosts').then((res) => res.json()).then((res) => {
  if (res.massage) {
    window.location.href = res.massage;
  } else {
   console.log(res.rows);
  }
});
