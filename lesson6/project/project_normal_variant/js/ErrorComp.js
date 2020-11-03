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
    <div class="error_box">
      <slot v-if='showError'>{{showText}}!</slot>
    </div>
  `
})