Vue.component('products', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
            //imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="product_body">
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
});

Vue.component('product', {
    props: ['product'],
    data() {
      return {
          /**
           * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
           * то мы легко можем получить доступ к ним используя свойство $root.
           * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
           */
          cartAPI: this.$root.$refs.cart,
      };
    },
    template: `
        <div class="product">
                    <a href="single_page.html" class="product_link">
                        <img class="product_img" :src="product.img" alt="product_1"></a>
                    <div class="product_content">
                        <a href="single_page.html" class="product_name">{{product.product_name}}</a>
                        <div class="product_rating">
                            <div class="product_price">{{product.price}}$</div>
                            <div class="account_rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <a class="product_cart" @click="cartAPI.addProduct(product)"><img class="product_cart_img" src="img/cart_white.png" alt="cart">Add to Cart</a>
                </div>
    `
 });


// const product = {
//     props: ['product'],
//     data() {
//       return {
//           /**
//            * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
//            * то мы легко можем получить доступ к ним используя свойство $root.
//            * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
//            */
//           cartAPI: this.$root.$refs.cart,
//       };
//     },
//     template: `
//         <div class="product">
//                     <a href="single_page.html" class="product_link">
//                         <img class="product_img" :src="product.img" alt="product_1"></a>
//                     <div class="product_content">
//                         <a href="single_page.html" class="product_name">{{product.product_name}}</a>
//                         <div class="product_rating">
//                             <div class="product_price">{{product.price}}$</div>
//                             <div class="account_rating">
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <a href="shopping_cart.html" class="product_cart" @click="cartAPI.addProduct(product)"><img class="product_cart_img" src="img/cart_white.png" alt="cart">Add to Cart</a>
//                 </div>
//     `

// //     template: `
// //     <div class="product-item">
// //                 <img :src="img" alt="Some img">
// //                 <div class="desc">
// //                     <h3>{{product.product_name}}</h3>
// //                     <p>{{product.price}}₽</p>
// //                     <button class="buy-btn" @click="cartAPI.addProduct(product)">Купить</button>
// // <!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
// // <!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
// //                 </div>
// //             </div>
// //     `
//  };

// const products = {
//     components: { product },
//     data(){
//         return {
//             catalogUrl: '',
//             products: [],
//             filtered: [],
//             //imgCatalog: 'https://placehold.it/200x150',
//         }
//     },
//     methods: {
//         filter(value){
//             let regexp = new RegExp(value, 'i');
//             this.filtered = this.products.filter(el => regexp.test(el.product_name));
//         }
//     },
//     mounted(){
//         this.$parent.getJson('/api/products')
//             .then(data => {
//                 for(let el of data){
//                     this.products.push(el);
//                     this.filtered.push(el);
//                 }
//             });
//     },
//     template: `
//         <div class="product_body">
//             <product ref="refref" v-for="item of filtered" :key="item.id_product" :product="item"></product>
//         </div>
//     `
// };

// export default products;