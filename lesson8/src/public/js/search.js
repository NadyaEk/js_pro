Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template:`
    <form action="#" @submit.prevent="$parent.$refs.products.filter(userSearch)">>
        <input class="header_input" type="text" v-model="userSearch" placeholder=" Search for Item...">
            <button class="header_search">
                <img src="img/search.png" alt="search">
            </button>
    </form>
    `
//     template: `
//             <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
//                 <input type="text" class="search-field" v-model="userSearch">
//                 <button class="btn-search" type="submit">
//                     <i class="fas fa-search"></i>
//                 </button>
//             </form>
//     `
 });