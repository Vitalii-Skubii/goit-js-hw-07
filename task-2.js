const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('#ingredients');

const addListItem = item => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = item;
    return ingredientsItem;

}

const addMarkupItem = ingredients.map((ingredient) => addListItem(ingredient));


ingredientsList.append(...addMarkupItem);



