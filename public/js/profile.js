const titleInput = document.querySelector('input.title');
const contentTextarea = document.querySelector('textarea.content');
const imageInput = document.querySelector('input.image');
const addPost = document.querySelector('button.add-post');
const profileBtn = document.querySelector('.profileBtn');
const addBlogBtn = document.querySelector('.add-btn-blog');
const addCategoryBtn = document.querySelector('.add-btn-category');
const postsSection = document.querySelector('.posts');
const addPopUp = document.querySelector('.add-pop-up');
const addCategoryPopUp = document.querySelector('.add-category-pop-up');
const closeIcon = document.querySelector('.close-add-icon');
const closeCategoryIcon = document.querySelector('.close-category-icon');
const addProfileImage = document.querySelector('.add-profile-image');
const userImage = document.querySelector('.userImage');
const logoutBtn = document.querySelector('.logout');
// Toggle classes
const toggleClasses = () => {
  postsSection.classList.toggle('blur');
  addPopUp.classList.toggle('show-container');
};
const toggleCategoryClasses = () => {
  postsSection.classList.toggle('blur');
  addCategoryPopUp.classList.toggle('show-container');
};
const removeClasses = () => {
  postsSection.classList.remove('blur');
  if (addPopUp.classList.contains('show-container')) {
    addPopUp.classList.remove('show-container');
  }
  if (addCategoryPopUp.classList.contains('show-container')) {
    addCategoryPopUp.classList.remove('show-container');
  }
};
const removeCategoryClasses = () => {
  postsSection.classList.remove('blur');
  addCategoryPopUp.classList.remove('show-container');
};
// Events
addBlogBtn.addEventListener('click', toggleClasses);
addCategoryBtn.addEventListener('click', toggleCategoryClasses);

postsSection.addEventListener('click', removeClasses);

closeIcon.addEventListener('click', removeClasses);
closeCategoryIcon.addEventListener('click', removeCategoryClasses);
const homeBtn = document.querySelector('.HomeBtn');
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
const fetchUserPosts = () => {
  fetch('/userPosts').then((res) => res.json()).then((res) => {
    if (res.massage) {
      window.location.href = res.massage;
    } else {
      postsContainer.textContent = '';
      res.rows.forEach((element) => {
        const conCopy = handleDom(element);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn_primary');
        conCopy.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
          const post = conCopy.parentElement;
          postsContainer.removeChild(post);
          deletePost(element.id);
        });
      });
    }
  });
};
fetchUserPosts();
homeBtn.addEventListener('click', () => {
  window.location.href = 'home.html';
});

addProfileImage.addEventListener('click', (e) => {
  e.preventDefault();
  addCategoryPopUp.classList.remove('show-container');

  const header = {
    method: 'POST',
    body: JSON.stringify({
      image: userImage.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/userImage', header).then(fetchUserPosts());
});
addPost.addEventListener('click', (e) => {
  addPopUp.classList.remove('show-container');
 e.preventDefault(); const header = {
    method: 'POST',
    body: JSON.stringify(
      { title: titleInput.value, content: contentTextarea.value, image: imageInput.value },
    ),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }; fetch('/post', header)
    .then((data) => data.json()).then(() => fetchUserPosts());
});

logoutBtn.addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()).then((res) => {
    window.location.href = res.path;
  }).catch(console.error);
});
