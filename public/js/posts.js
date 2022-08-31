const postsContainer = document.querySelector('.posts');

fetch('/posts').then((data) => data.text()).then((res) => {
  JSON.parse(res).reverse().forEach((element) => {
    const post = document.createElement('div');
    post.className = 'blog_post';

    const userImgCon = document.createElement('div');
    userImgCon.className = 'img_pod';

    const userImg = document.createElement('img');
    userImg.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
    userImg.alt = 'user image';

    const conCopy = document.createElement('div');
    conCopy.className = 'container_copy';

    const userName = document.createElement('p');
    userName.className = 'username';
    userName.textContent = element.username;

    const postTime = document.createElement('h3');
    postTime.textContent = element.datetime.split('T')[0];

    const postTitle = document.createElement('h1');
    postTitle.textContent = element.title;

    const postText = document.createElement('p');
    postText.textContent = element.content;

    const postImg = document.createElement('img');
    postImg.id = 'post-img';
    postImg.src = element.image;
    postImg.alt = 'post image';

    userImgCon.appendChild(userImg);
    post.appendChild(userImgCon);
    conCopy.appendChild(userName);
    conCopy.appendChild(postTime);
    conCopy.appendChild(postTitle);
    conCopy.appendChild(postText);
    conCopy.appendChild(postImg);
    post.appendChild(conCopy);
    postsContainer.appendChild(post);
  });
}).catch((err) => { console.log('error', err); });
