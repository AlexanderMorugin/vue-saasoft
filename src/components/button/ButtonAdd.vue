<template>
  <button class="buttonAdd" @click="accountStore.createAccount()">
    <IconPlus class="buttonAdd__icon" />
  </button>
</template>

<script setup>
import { useAccountStore } from '@/stores/account'
import IconPlus from '../icon/IconPlus.vue'

const accountStore = useAccountStore()
</script>

<style scoped>
.buttonAdd {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 5px;
  border-radius: var(--border-radius-xs);
  border: 1px solid var(--mask-black-fourthly);
  transition: 0.2s ease;
}
.buttonAdd:hover {
  border: 1px solid var(--mask-black-secondary);
}
.buttonAdd__icon {
  width: 24px;
  height: 24px;
  fill: var(--black-primary);
}
</style>
