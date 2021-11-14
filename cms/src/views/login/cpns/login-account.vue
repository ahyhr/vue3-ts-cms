<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" autocomplete="off" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import cache from '@/utils/cache'


export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    })
    // 表单 type类型
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: Boolean) => {
      // 表单验证
      formRef.value?.validate((valid) => {
        if (!valid) return

        // 记住密码
        if (isKeepPassword) {
          // 本地缓存
          cache.setCache('name', account.name)
          cache.setCache('password', account.password)
        } else {
          cache.deleteCache('name')
          cache.deleteCache('password')

        }
        // 登录请求验证
        store.dispatch("login/accountLoginAction", {...account})
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
</style>
