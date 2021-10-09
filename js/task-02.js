const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];
const ingredientsList = document.querySelector('ul#ingredients');

const makeMarkup = array => {
  return array.map(elem => {
    const li = document.createElement('li');
    li.textContent = elem;
    li.classList.add('item');
    return li;
  });
};

ingredientsList.append(...makeMarkup(ingredients));
