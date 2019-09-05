import Vue from 'vue';
import router from '@/router/index';
import Index from '@/components/views/index/index.vue';
import CONFIG from '@/config/index';
// 在开发环境才启用mock
if (CONFIG.mock) {
  require('../../mock/index');
}
const app = new Vue({
  render: h => h(Index),
  router
});
app.$mount('#app');
