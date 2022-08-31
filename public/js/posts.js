const postsContainer = document.querySelector('.posts');
const fetchPosts = () => {
  fetch('/posts').then((data) => data.text()).then((res) => {
    postsContainer.textContent = '';
    JSON.parse(res).reverse().forEach((element) => {
      console.log(element);
      handleDom(element);
    });
  }).catch((err) => console.log('error', err));
};
fetchPosts();
