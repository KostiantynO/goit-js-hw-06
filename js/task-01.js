const list = document.querySelector('ul#categories');
console.log(`Number of categories: ${list.childElementCount}`);

list.querySelectorAll('li.item').forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelector('ul').childElementCount}`);
});

// В результате, в консоли будут выведены такие сообщения.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
