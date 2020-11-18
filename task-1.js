 const selectedById = document.querySelector('ul#categories');


 console.log(`В списке ${selectedById.children.length} категории`); 

const selectedCategory = document.querySelectorAll('li.item').forEach((element) =>
    console.log(`Категория: ${element.querySelector('h2').textContent} \nКоличество элементов: ${element.querySelectorAll('li').length}`))