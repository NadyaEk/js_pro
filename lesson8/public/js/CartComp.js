Vue.component('cart', {
    data(){
      return {
            //imgCart: 'https://placehold.it/50x100',
            //cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                  .then(data => {
                      if (data.result === 1) {
                          this.cartItems.push(prod);
                      }
                  });
            }
        },
        remove(item) {
            this.$parent.deleteJson(`/api/cart/${item.id_product}`, {quantity:1})
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity > 1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted(){
        this.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template:`
        <div>
            <button class="btn-cart" type="button" @click="showCart = !showCart"><img src="img/cart.png" alt="cart"></button>
            <div class="account_box" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="account_product" v-for="item of cartItems" 
                    :key="item.id_product"
                    :cart-item="item" 
                    :img="item.img_mini"
                    @remove="remove">
                </cart-item>
            <div class="account_total">
                <p>TOTAL</p>
                <p>{{cartItem.account}}</p>
            </div>
            <a href="checkout.html" class="account_checkout">Checkout</a>
            <a href="shopping_cart.html" class="account_go">Go to cart</a>
        </div>
    `
});

Vue.component('cartItem' = {
    props: ['cartItem', 'img'],
    template: `
         <div>
            <a href="#" class="account_link"><img :src="img" alt="product_mini" class="account_img"></a>
                            <div class="account_text">
                                <h1 class="account_h1"><a href="#">{{cartItem.product_name}}</a></h1>
                                <p class="account_rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </p>
                                <p class="account_quantity">Количество: {{cartItem.quantity}}</p>
                                <span class="account_price">За ед товара:{{cartItem.price}}$</span>
                                <span class="account_price">Всего:{{cartItem.price}}x{{cartItem.quantity}}$</span>
                            </div>
                            <p class="account_delete"><button @click="$emit('remove', cartItem)">&times;</button></p>
        </div>
    ` 
});

// const cartItem = {
//     props: ['cartItem', 'img'],
//     template: `
//          <div>
//             <a href="#" class="account_link"><img :src="img" alt="product_mini" class="account_img"></a>
//                             <div class="account_text">
//                                 <h1 class="account_h1"><a href="#">{{cartItem.product_name}}</a></h1>
//                                 <p class="account_rating">
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star"></i>
//                                     <i class="fas fa-star-half-alt"></i>
//                                 </p>
//                                 <p class="account_quantity">Количество: {{cartItem.quantity}}</p>
//                                 <span class="account_price">За ед товара:{{cartItem.price}}$</span>
//                                 <span class="account_price">Всего:{{cartItem.price}}x{{cartItem.quantity}}$</span>
//                             </div>
//                             <p class="account_delete"><button @click="$emit('remove', cartItem)">&times;</button></p>
//         </div>
//     ` 
//     // template: `
//     //             <div class="cart-item">
//     //             <div class="product-bio">
//     //                 <img :src="img" alt="Some image">
//     //                 <div class="product-desc">
//     //                     <p class="product-title">{{cartItem.product_name}}</p>
//     //                     <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
//     //                     <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
//     //                 </div>
//     //             </div>
//     //             <div class="right-block">
//     //                 <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
//     //                 <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
//     //             </div>
//     //         </div>
//     // `
// };

// const cart = {
//     components: { cartItem },
//     data(){
//       return {
//           //imgCart: 'https://placehold.it/50x100',
//           cartUrl: '/getBasket.json',
//           cartItems: [],
//           showCart: false,
//       }
//     },
//     methods: {
//         addProduct(product){
//             let find = this.cartItems.find(el => el.id_product === product.id_product);
//             if(find){
//                 this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
//                 find.quantity++;
//             } else {
//                 let prod = Object.assign({quantity: 1}, product);
//                 this.$parent.postJson('/api/cart', prod)
//                   .then(data => {
//                       if (data.result === 1) {
//                           this.cartItems.push(prod);
//                       }
//                   });
//             }
//         },
//         remove(item) {
//             this.$parent.deleteJson(`/api/cart/${item.id_product}`, {quantity:1})
//                 .then(data => {
//                     if(data.result === 1) {
//                         if(item.quantity > 1){
//                             item.quantity--;
//                         } else {
//                             this.cartItems.splice(this.cartItems.indexOf(item), 1)
//                         }
//                     }
//                 })
//         },
//     },
//     mounted(){
//         this.$parent.getJson('/api/cart')
//             .then(data => {
//                 for(let el of data.contents){
//                     this.cartItems.push(el);
//                 }
//             });
//     },
//     template:`
//         <div>
//             <button class="btn-cart" type="button" @click="showCart = !showCart"><img src="img/cart.png" alt="cart"></button>
//             <div class="account_box" v-show="showCart">
//                 <p v-if="!cartItems.length">Корзина пуста</p>
//                 <cart-item class="account_product" v-for="item of cartItems" 
//                     :key="item.id_product"
//                     :cart-item="item" 
//                     :img="item.img_mini"
//                     @remove="remove">
//                 </cart-item>
//             <div class="account_total">
//                 <p>TOTAL</p>
//                 <p>{{cartItem.account}}</p>
//             </div>
//             <a href="checkout.html" class="account_checkout">Checkout</a>
//             <a href="shopping_cart.html" class="account_go">Go to cart</a>
//         </div>
//     `
//     // template: `
//     //     <div>
//     //         <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
//     //         <div class="cart-block" v-show="showCart">
//     //             <p v-if="!cartItems.length">Корзина пуста</p>
//     //             <cart-item class="cart-item" 
//     //             v-for="item of cartItems" 
//     //             :key="item.id_product"
//     //             :cart-item="item" 
//     //             :img="item.img_mini"
//     //             @remove="remove">
//     //             </cart-item>
//     //         </div>
//     //     </div>`
// };
// export default cart;

