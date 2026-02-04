<template>
  <ul class="accountList">
    <li v-for="(item, index) in accountStore.accounts" :key="index">
      <FormAccount />
    </li>
  </ul>
</template>

<script setup>
import { useAccountStore } from '@/stores/account'
import FormAccount from '../form/FormAccount.vue'

const accountStore = useAccountStore()
</script>

<style scoped>
.accountList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
}
</style>
