const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const createGallery = document.querySelector('ul#gallery');

// const callback = item => {
//     const addLi = document.createElement('li');
    
//     const addImg = document.createElement('img');
//     addImg.setAttribute('src', item.url);
//     addImg.setAttribute('alt', item.alt);
//     addLi.append(addImg);
//     return addLi;
// }

// const createArrayImg = images.map(img => callback(img));

// const imgGallery = createGallery.append(...createArrayImg);

const addListItem = images.reduce((acc, item) => {
  return acc.concat(`<li class="gallery-item"><img src=${item.url} alt="${item.alt}"></li>`)
}, '') 
createGallery.insertAdjacentHTML("afterbegin",addListItem)
