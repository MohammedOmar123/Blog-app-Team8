const postsContainer = document.querySelector('.posts');

fetch('/posts').then((data) => data.text()).then((res) => {
  JSON.parse(res).reverse().forEach((element) => {
    handleDom(element);
  });
}).catch((err) => console.log('error', err));
