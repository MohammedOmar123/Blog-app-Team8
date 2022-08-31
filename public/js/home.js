const addBlogBtn = document.querySelector('.add-btn-blog');
const postsSection = document.querySelector('.posts');
const addPopUp = document.querySelector('.add-pop-up');
const closeIcon = document.querySelector('.close-add-icon');

// Toggle classes
const toggleClasses = () => {
  postsSection.classList.toggle('blur');
  addPopUp.classList.toggle('show-container');
};

const removeClasses = () => {
  postsSection.classList.remove('blur');
  if (addPopUp.classList.contains('show-container')) {
    addPopUp.classList.remove('show-container');
  }
};

// Events
addBlogBtn.addEventListener('click', toggleClasses);

postsSection.addEventListener('click', removeClasses);

closeIcon.addEventListener('click', removeClasses);
