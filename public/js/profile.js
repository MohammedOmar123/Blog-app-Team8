const postsContainer = document.querySelector('.posts');
fetch('/userPosts').then((res) => res.json()).then((res) => {
  if (res.massage) {
    window.location.href = res.massage;
  } else {
    res.rows.forEach((element) => {
      handleDom(element);
    });
  }
});
