import { createApp } from 'vue'
const app = createApp({})

app.component('blog-post', {
  props: ['title'],
  template: `<h4>{{ title }}</h4>`
})

app.mount('#blog-post-demo')