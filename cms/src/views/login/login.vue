<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
  name: 'login',
  components: {
    LoginPanel
  },
  setup() {

  }

})
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login-bg.svg");
}
</style>
