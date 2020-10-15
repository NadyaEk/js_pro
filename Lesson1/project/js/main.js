//  Декларативный или функциональный подход

/** Этот класс формирует список продуктов и выводит их в определенном месте документа.  В него можно передать селектор с наименованием области выведения списка продуктов. Сейчас по умолчанию это '.products' 
 */

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._goodsList = [];
    this._fetchGoods();
    this.renderGoodsList();
    this.summ(this._goods);
  }
  /**
   * Этот метод получает откуда-то с сервера данные по продуктам
   */
  _fetchGoods() {
    this._goods = [{
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
  }
  /**
   * Этот метод в выбранную нами область (container) размещает сформированную разметку по каждому полученному товару.
   */
  renderGoodsList() {
    /**
     * здесь мы обращаемся к классу ProductItem и создаем отдельный элемент товара
     */
    const block = document.querySelector(this.container);
    for (let product of this._goods) {
      const productElement = new ProductItem(product);
      this._goodsList.push(productElement);
    }
    /**
     * здесь мы добавляем на страницу разметку отдельного товара, созданного с помощью метода renderProduct класса ProductItem
     */
    this._goodsList.forEach(function (element) {
      block.insertAdjacentHTML("beforeend", element.renderProduct());
    });
  }
  /**
   * Этот метод подсчитывает сумму всех товаров, передаваемого массива
   */
  summ(arr) {
    var summ = 0;
    for (let product of arr) {
      summ = summ + product.price;
    }
    console.log(summ);
  }
}
/**
 * Класс генерирует сам продукт и его разметку!
 */
class ProductItem {
  constructor(product, img = 'https://picsum.photos/200/200?random') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }
  renderProduct() {
    return `<div class="products__item" data-id = "${this.id}">
            <img class="products__img" src="${this.img}${this.id}" alt="img${this.id}">
            <div class="product__descr">
              <h3 class="products__title">${this.title}</h3>
              <p class="products__price">${this.price} \u20bd</p>
              <button class="by-btn">Добавить в корзину</button>
            </div>  
      </div>`;
  }
}
new ProductList();


/** Этот класс формирует список ВЫБРАННЫХ продуктов и выводит их в определенном месте документа при нажатии на кнопку КОРЗИНА.  
 */

class Cart {
  constructor() {
    this.productCartList = [];
    this.addToCart();
    this.renderCartList();
  }
  /**
   * метод создает массив из элементов, добавленных в корзину, путем обработки нажатия на кнопку "добавить в корзину"
   */
  addToCart() {

  }

  /**
   *  Этот метод будет подсчитывать стоимость товаров, помещенных в корзину
   */
  summProducts(arr) {

  }
  /**
   * Этот метод в выбранную нами область размещает сформированную разметку по каждому выбранному товару.
   */
  renderCartList() {
    const cart = document.querySelector('.cart');
    // этот блок будет не виден пока не произойдет нажатия на кнопку "КОРЗИНА"
    this.productCartList.forEach(function (element) {
      cart.insertAdjacentHTML("beforeend", element.renderProduct());
    });
    /**
     * вызывает метод генерирующий разметку выбраного товара
     */
    renderCartElement()

    /**
     * добавляет разметку для сформированной суммы выбранных товаров и кнопку УДАЛИТЬ ТОВАР
     */
  }
  deleteElement() {

    /**
     * этот метод удаляет товар из корзины и вызывает заново метод генерации разметки товара в корзине???
     */

  }
};

/**
 * Этот класс генерирует разметку для товара, положенного в корзину
 */

class CartElement {
  constructor(product, img = 'https://picsum.photos/100/100?random') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }

  /**
   * метод генерирующий разметку отдельного товара, добавленного в корзину
   */
  renderCartElement() {
    return `<div class="cart">
            <img class="products__img" src="${this.img}${this.id}" alt="img${this.id}">
            <div class="product__descr">
              <h3 class="products__title">${this.title}</h3>
              <p class="products__price">${this.price} \u20bd</p>
              <button class="by-btn">Добавить в корзину</button>
            </div>  
      </div>`
  }
}
new Cart();

// Нативный подход или императивный.
// const products = [{
//     id: 1,
//     title: 'Notebook',
//     price: 20000
//   },
//   {
//     id: 2,
//     title: 'Mouse',
//     price: 1500
//   },
//   {
//     id: 3,
//     title: 'Keyboard',
//     price: 5000
//   },
//   {
//     id: 4,
//     title: 'Gamepad',
//     price: 4500
//   },
// ];

// const renderProduct = (item, img = 'https://picsum.photos/200/200?random') => 
//   `<div class="products__item" data-id = "${item.id}">
//             <img class="products__img" src="${img}${item.id}" alt="img${item.id}">
//             <div class="product__descr">
//               <h3 class="products__title">${item.title}</h3>
//               <p class="products__price">${item.price}</p>
//               <button class="by-btn">Добавить в корзину</button>
//             </div>  
//           </div>`;

// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
// renderProducts(products);