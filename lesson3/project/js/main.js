
// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


// //  Декларативный или функциональный подход

// /** Этот класс формирует список продуктов и выводит их в определенном месте документа.  В него можно передать селектор с наименованием области выведения списка продуктов. Сейчас по умолчанию это '.products' 
//  */

// class ProductList {
//   constructor(container = '.products') {
//     this.container = container;
//     this._goods = [];
//     this._goodsList = [];
//     // this._fetchGoods();
//     // this.summ();
//     this.getProducts().then((data) => {
//       this._goods = [...data];
//       this.renderGoodsList();
//     });
//   }
//   /**
//    * Этот метод получает откуда-то с сервера данные по продуктам
//    */

// //     // this._fetchGoods();

  

// //     console.log(this.sum());
// //   }

// //   // _fetchGoods() {
// //   //   getRequest(`${API}/catalogData.json`, (data) => {
// //   //     console.log(data);
// //   //     this.#goods = JSON.parse(data);
// //   //     this.#render();
// //   //     console.log(this.#goods);
// //   //   });
// //   // }

//   getProducts() {
//     return fetch(`${API}/catalogData.json`)
//         .then(response => response.json())
//         .catch((error) => {
//           console.log(error);
//         });
//   }

//   // _fetchGoods() {
//   //   this._goods = [{
//   //       id: 1,
//   //       title: 'Notebook',
//   //       price: 20000
//   //     },
//   //     {
//   //       id: 2,
//   //       title: 'Mouse',
//   //       price: 1500
//   //     },
//   //     {
//   //       id: 3,
//   //       title: 'Keyboard',
//   //       price: 5000
//   //     },
//   //     {
//   //       id: 4,
//   //       title: 'Gamepad',
//   //       price: 4500
//   //     },
//   //   ];
//   // }
//   /**
//    * Этот метод в выбранную нами область (container) размещает сформированную разметку по каждому полученному товару.
//    */
//   renderGoodsList() {
//     /**
//      * здесь мы обращаемся к классу ProductItem и создаем отдельный элемент товара
//      */
//     const block = document.querySelector(this.container);
//     for (let product of this._goods) {
//       const productElement = new ProductItem(product);
//       this._goodsList.push(productElement);
//     }
//     /**
//      * здесь мы добавляем на страницу разметку отдельного товара, созданного с помощью метода renderProduct класса ProductItem
//      */
//     this._goodsList.forEach(function (element) {
//       block.insertAdjacentHTML("beforeend", element.renderProduct());
//     });
//   }
//   /**
//    * Этот метод подсчитывает сумму всех товаров
//    */
//   summ() {
//     var summ = 0;
//     for (let product of this._goods) {
//       summ = summ + product.price;
//     }
//     console.log(summ);
//   }
// }
// /**
//  * Класс генерирует сам продукт и его разметку!
//  */
// class ProductItem {
//   constructor(product, img = 'https://picsum.photos/200/200?random') {
//     this.product_name = product.product_name;
//     this.id = product.id_product;
//     this.price = product.price;
//     this.img = img;
//   }
//   renderProduct() {
//     return `<div class="products__item" data-id = "${this.id}">
//             <img class="products__img" src="${this.img}${this.id}" alt="img${this.id}">
//             <div class="product__descr">
//               <h3 class="products__title">${this.product_name}</h3>
//               <p class="products__price">${this.price} \u20bd</p>
//               <button class="by-btn">Добавить в корзину</button>
//             </div>  
//       </div>`;
//   }
// }
// new ProductList();


// /** Этот класс формирует список ВЫБРАННЫХ продуктов и выводит их в определенном месте документа при нажатии на кнопку КОРЗИНА.  
//  */

// class Cart {

//   constructor() {
//     this._productCartList = [];
//     this._productCart = {};
//     this.getCartProducts().then((data) => {
//       this._productCart = {...data};
//       this.renderCartList();
      
//     });
//     // this.addToCart();
//     // this.renderCartList();
//   }
//   getCartProducts() {
//     return fetch(`${API}/getBasket.json`)
//         .then(response => response.json())
//         .catch((error) => {
//           console.log(error);
//         });
//   }

//   /**
//    * метод создает массив из элементов, добавленных в корзину, путем обработки нажатия на кнопку "добавить в корзину"
//    */
//   addToCart() {

//   }

//   /**
//    *  Этот метод будет подсчитывать стоимость товаров, помещенных в корзину
//    */
//   summProducts() {

//   }
//   /**
//    * Этот метод в выбранную нами область размещает сформированную разметку по каждому выбранному товару.
//    */
//   renderCartList() {
//     const cart = document.querySelector('.cart');
//     for (let element of this._productCart.contents) {
//       const cartElement = new CartElement(element);
//       this._productCartList.push(cartElement);
//     }
      
    
//     // этот блок будет не виден пока не произойдет нажатия на кнопку "КОРЗИНА"
//     this._productCartList.forEach(function (element) {
//       cart.insertAdjacentHTML("beforeend", element.renderCartElement());
//     });
//     /**
//      * вызывает метод генерирующий разметку выбраного товара
//      */
//     // renderCartElement()

//     /**
//      * добавляет разметку для сформированной суммы выбранных товаров и кнопку УДАЛИТЬ ТОВАР
//      */
//   }
//   deleteElement() {

//     /**
//      * этот метод удаляет товар из корзины и вызывает заново метод генерации разметки товара в корзине???
//      */

//   }
// };

// /**
//  * Этот класс генерирует разметку для товара, положенного в корзину
//  */

// class CartElement extends ProductItem {
//   constructor(product, img = 'https://picsum.photos/100/100?random') {
//   super (product,img);
//   this.quantity = product.quantity;
//   // this.sum = sum;

//   }

//   /**
//    * метод генерирующий разметку отдельного товара, добавленного в корзину
//    */
//   renderCartElement() {
//     return `
//             <img class="cart__img" src="${this.img}${this.id}" alt="img${this.id}">
//             <div class="cart__descr">
//               <h3 class="cart__title">${this.product_name}</h3>
//               <p class="cart__price">${this.price} \u20bd</p>
//               <p class="cart__quantity">количество:${this.quantity}<p>
//               <button class="delete-btn">Удалить из корзины</button>
//             </div>`
//   }
// }
// new Cart();

// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// }

// let getRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status !== 200) {
//           reject("My Error")
//         } else {
//           resolve(xhr.responseText);
//         }
//       }
//     }
//     xhr.send(); 
//   })
// }

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


// –--------------------------------

class ProductList {

  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this._allProducts = [];

    this._fetchGoods()
      .then(response => response.json())
      .then((data) => {
        this.goods = [...data];
        this.render();
      }).catch((error) => {
        console.log(error)
      });

    // this.#getProducts().then((data) => {
    //   this.#goods = [...data];
    //   // this.#goods = Array.from(data);
    //   this.#render();
    // });

    // console.log(this.sum());
  }

  async _fetchGoods() {
    return (await fetch(`${API}/catalogData.json`));
  }

  // _fetchGoods(){
  //   getRequest(`${API}/catalogData.json`).then((data) => {
  //   this.goods = JSON.parse(data);
  //     this.render();
  //     console.log(this.goods);
  // })
  // .catch((error) => {
  //   console.log(error)
  // });
  // }
  // // #getProducts() {
  //   return fetch(`${API}/catalogData.json`)
  //       .then(response => response.json())
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // }

  sum() {
    return this.goods.reduce((sum, { price }) => sum + price, 0);
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

const list = new ProductList();