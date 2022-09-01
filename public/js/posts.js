const fetchPosts = (msg) => {
  fetch('/posts').then((data) => data.text()).then((res) => {
    postsContainer.textContent = '';
    JSON.parse(res).reverse().forEach((element) => {
      const conCopy = handleDom(element);
      if ((msg)) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn_primary');
        conCopy.appendChild(deleteBtn);
      }
    });
  }).catch((err) => console.log('error', err));
};
fetchPosts();
