Vue.component('error-box', {
  template: `
    <div class="error_box">
      <strong>Ошибка!</strong>
      <slot></slot>
    </div>
  `
})