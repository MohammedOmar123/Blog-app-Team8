const addBlogBtn = document.querySelector('.add-btn-blog');
const postsSection = document.querySelector('.posts');
const addPopup = document.querySelector('.add-pop-up');
const closeIcon = document.querySelector('.close-add-icon');
const titleInput = document.querySelector('input.title');
const contentTextarea = document.querySelector('textarea.content');
const imageInput = document.querySelector('input.image');
const addPost = document.querySelector('button.add-post');
const profileBtn = document.querySelector('.profileBtn');
// Toggle classes
const toggleClasses = () => {
  postsSection.classList.toggle('blur');
  addPopup.classList.toggle('show-container');
};

const removeClasses = () => {
  postsSection.classList.remove('blur');
  if (addPopup.classList.contains('show-container')) {
    addPopup.classList.remove('show-container');
  }
};

// Events
addBlogBtn.addEventListener('click', toggleClasses);

postsSection.addEventListener('click', removeClasses);

closeIcon.addEventListener('click', removeClasses);

addPost.addEventListener('click', (e) => {
  e.preventDefault();
  removeClasses()
  const header = {
    method: 'POST',
    body: JSON.stringify({
      title: titleInput.value,
      content: contentTextarea.value,
      image: imageInput.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/post', header)
    .then((data) => data.json()).then(() => fetchPosts());
});
profileBtn.addEventListener('click', () => {
  window.location.href = 'profile.html';
});
