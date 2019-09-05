<template>
  <div class="content">
    <h3>{{ msg }}</h3>
    <router-view />
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      msg: 'welcome to webpack-vue'
    };
  },
  mounted() {
    axios.get('/user').then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss">
@import url('~@/common/css/utils.scss');
</style>

<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 120px;
}
</style>
