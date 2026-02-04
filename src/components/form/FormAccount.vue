<template>
  <form class="formAccount">
    <FormInput
      type="text"
      name="markField"
      placeholder="Значение"
      v-model:value="markField"
      @clearInput="markField = null"
    />
    <span class="formHeader__name">Тип записи</span>
    <FormInput
      type="text"
      name="loginField"
      placeholder="Значение"
      v-model:value="loginField"
      @clearInput="loginField = null"
    />
    <FormInput
      :type="passwordType"
      name="passwordField"
      placeholder="Значение"
      v-model:value="passwordField"
      @openPassword="openPassword"
    />
    <ButtonDelete v-if="markField || loginField || passwordField" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import FormInput from './FormInput.vue'
import ButtonDelete from '../button/ButtonDelete.vue'

const markField = ref(null)
const loginField = ref(null)
const passwordField = ref(null)
const passwordType = ref('password')

const openPassword = () => {
  if (passwordType.value === 'password') {
    return (passwordType.value = 'text')
  }
  if (passwordType.value === 'text') {
    return (passwordType.value = 'password')
  }
}
</script>

<style scoped>
.formAccount {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 40px;
  align-items: center;
  gap: 20px;
}
</style>
