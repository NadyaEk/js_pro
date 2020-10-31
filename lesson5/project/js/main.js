const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/50x50',
        cartUrl: '/getBasket.json',
        addCartUrl:'/addToBasket.json',
        deleteCartUrl:'/deleteFromBasket.json',
        productsCart:[],
        isVisibleCart:false,
        searchLine: '',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product)
            this.getJson(`${API}${this.addCartUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        let item = this.productsCart.find(el => el.id_product === product.id_product);
                        if (item) {
                            item.quantity++;
                        } else {
                            let newProduct = Object.assign({quantity:1},product);
                            this.productsCart.push(newProduct);
                        }
                    } else {
                        alert('error');
                    }
                }); 
            
        },
        removeProduct(product) {
            this.getJson(`${API}${this.deleteCartUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        } else {
                            this.productsCart.splice(this.productsCart.indexOf(product),1);
                        }
                    } else {
                        alert ('error');
                    }
                })
        },
        filter(){
            const regexp = new RegExp(this.searchLine, 'i');
            console.log(this.products);
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            console.log(this.filtered);
            //this.products = [...this.filtered];

    //         this.allProducts.forEach(el => {
    //         const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
    //         if(!this.filtered.includes(el)){
    //           block.classList.add('invisible');
    //             } else {
    //          block.classList.remove('invisible');
    //   }
    // })
  }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        this.getJson(`${API}${this.catalogUrl}`)
            .then(data => {
                for (el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API}${this.cartUrl}`)
            .then(data => {
                for (el of data.contents) {
                    this.productsCart.push(el);
                }
            });
    },
    beforeMount() {
        console.log('beforeMount');
        // this.filter(value);
    },
    mounted() {
        console.log('mounted');

    },
    beforeUpdate() {
        console.log('beforeUpdate');
        // this.filter(value);
        if (this.filtered.length === 0) {

        }
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
});
