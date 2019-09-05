import Vue from 'vue';
import router from '@/router/index';
import Index from '@/components/views/index/index.vue';
// import '../mock/index';
const app = new Vue({
  render: h => h(Index),
  router
});
app.$mount('#app');
