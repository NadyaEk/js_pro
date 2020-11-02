Vue.component ('search', {
    props: ['userSearch','filter()'],
    // data () {
    //     return {
    //         // innerFiltered:[],
    //         //userSearch:'',
    //         //filterAPI: this.$root.$refs.filter,
    //     }
    //  },
    // methods: {
    //     filter(){
    //         let regexp = new RegExp(this.$parent.userSearch, 'i');
    //         this.$parent.filtered = this.$parent.products.filter(el => regexp.test(el.product_name));
    //     }
    // },
    // mounted() {
    //     console.log(this);
    //     innerFiltered = [...filtered];
    // },
    template:`
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter">
                <input type="text" class="search-field" :userSearch="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
        </form>
        `
})