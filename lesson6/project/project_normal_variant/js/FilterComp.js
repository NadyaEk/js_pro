Vue.component ('filter', {
    props: ['products','filtered','userSearch'],
    data () {
        return {
            //filtered:filtered,
            //filterAPI: this.$root.$refs.filter,
        }
     },
    methods: {
        filter(){
            let regexp = new RegExp(userSearch, 'i');
            filtered = products.filter(el => regexp.test(el.product_name));
        }
    },
    template:`
        <form action="#" class="search-form" @submit.prevent="filter">
                <input type="text" class="search-field" :userSearch="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
        </form>
        `
    
})