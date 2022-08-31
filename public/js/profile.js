const postsContainer = document.querySelector('.posts');// this used in dom file
const homeBtn = document.querySelector('.HomeBtn');
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
postsSection.addEventListener('click', removeClasses);

const deletePost = (id) => fetch(`/userPosts/delete-post/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});

fetch('/userPosts').then((res) => res.json()).then((res) => {
  if (res.massage) {
    window.location.href = res.massage;
  } else {
    res.rows.forEach((element) => {
      const conCopy = handleDom(element);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('btn_primary');
      conCopy.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', ()=>{deletePost(element.id)})
    });
  }
});
homeBtn.addEventListener('click', () => {
  window.location.href = 'home.html';
});
