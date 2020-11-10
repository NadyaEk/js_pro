Vue.component('error-box', {
  data (){
      return {
          showError:false,
          showText:'',
      }
  },
  methods: {
    showErr (value) {
            this.showText = value;
            this.showError = true;
       } 
    },
  template: `
    <div v-if='showError===true' class="error_box">
      <div>{{showText}} <button class="del-btn" @click='{{showError = false}}'>&times;</button> 
      </div>
    </div>  
    `
})