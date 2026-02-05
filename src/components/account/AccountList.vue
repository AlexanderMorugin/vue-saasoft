<template>
  <ul class="accountList">
    <li v-for="account in accountStore.accounts" :key="account.id">
      <FormAccount :account="account" />
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
