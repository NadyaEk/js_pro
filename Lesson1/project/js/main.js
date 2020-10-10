const products = [{
    id: 1,
    title: 'Notebook',
    price: 20000
  },
  {
    id: 2,
    title: 'Mouse',
    price: 1500
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 5000
  },
  {
    id: 4,
    title: 'Gamepad',
    price: 4500
  },
];

const renderProduct = (id, title, price, img = 'https://picsum.photos/200/200?random') => {
  return `<div class="products__item">
            <img class="products__img" src="${img}${id}" alt="">
            <h3 class="products__title">${title}</h3>
            <p class="products__price">${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map(item => renderProduct(item.id, item.title, item.price));
  console.log(productList);
  let [a, b, c, d] = productList;
  document.querySelector('.products').innerHTML = `${a} ${b} ${c} ${d}`;
};

renderProducts(products);