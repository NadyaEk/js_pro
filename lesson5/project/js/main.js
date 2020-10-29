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
        productsCart:[],
        isVisibleCart:'display: none',
        show: false,
        searchLine: 'search.value',
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
        },
        init(container) {


        },
        filter(searchLine){
            const regexp = new RegExp(searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));

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
    },
    updated() {
        console.log('updated');
        this.filter(value);
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
});
