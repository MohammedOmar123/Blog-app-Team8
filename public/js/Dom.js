const postsContainer = document.querySelector('.posts');// this used in dom file
const handleDom = (element) => {
  const post = document.createElement('div');
  post.className = 'blog_post';

  const row = document.createElement('div');
  row.className = 'row';

  const data = document.createElement('div');
  data.className = 'data';

  const userImgCon = document.createElement('div');
  userImgCon.className = 'img_pod';

  const userImg = document.createElement('img');
  if (element.userimage) {
    userImg.src = element.userimage;
  } else {
    userImg.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  }
  userImg.alt = 'user image';

  const conCopy = document.createElement('div');
  conCopy.className = 'container_copy';

  const userName = document.createElement('p');
  userName.className = 'username';
  userName.textContent = element.username;

  const postTime = document.createElement('h3');
  postTime.textContent = element.datetime.split('T')[0];
  postTime.className = 'postTime';


  const postTitle = document.createElement('h1');
  postTitle.textContent = element.title;
  postTitle.className = 'postTitle'

  const postText = document.createElement('p');
  postText.textContent = element.content;
  postText.className = 'postText'


  userImgCon.appendChild(userImg);
  row.appendChild(userImgCon);
  data.appendChild(userName);
  data.appendChild(postTime);
  row.appendChild(data);
  conCopy.appendChild(row);
  conCopy.appendChild(postTitle);
  conCopy.appendChild(postText);
  if (element.image) {
    const postImg = document.createElement('img');
    postImg.id = 'post-img';
    postImg.src = element.image;
    postImg.alt = 'post image';
    conCopy.appendChild(postImg);
  }
  post.appendChild(conCopy);
  postsContainer.appendChild(post);
  return conCopy;
};
