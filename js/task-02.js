const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

const items = ingredients.reduce((acc, itemText) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = itemText;
  acc.push(li);
  return acc;
}, []);

document.querySelector('ul#ingredients').append(...items);
