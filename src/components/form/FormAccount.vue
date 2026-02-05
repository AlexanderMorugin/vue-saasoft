<template>
  <form class="formAccount">
    <FormInput
      type="text"
      name="markField"
      placeholder="Значение"
      v-model:value="markField"
      @clearInput="markField = null"
    />
    <FormSelect :options="recordTypes" v-model:value="recordTypeField" />
    <div
      :class="[
        'formAccount__login',
        { formAccount__login_active: recordTypeField.name === 'LDAP' },
      ]"
    >
      <FormInput
        type="text"
        name="loginField"
        placeholder="Значение"
        v-model:value="loginField"
        @clearInput="loginField = null"
      />
      <FormInput
        v-if="recordTypeField.name !== 'LDAP'"
        :type="passwordType"
        name="passwordField"
        placeholder="Значение"
        v-model:value="passwordField"
        @openPassword="openPassword"
      />
    </div>
    <ButtonDelete v-if="markField || loginField || passwordField" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import ButtonDelete from '../button/ButtonDelete.vue'

const recordTypes = [
  { id: 1, name: 'Локальная' },
  { id: 2, name: 'LDAP' },
]

const markField = ref(null)
const recordTypeField = ref(recordTypes[0].name)
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
  grid-template-columns: 320px 320px 660px 40px;
  align-items: center;
  gap: 20px;
}
.formAccount__login {
  display: grid;
  grid-template-columns: 320px 320px;
  align-items: center;
  gap: 20px;
}
.formAccount__login_active {
  grid-template-columns: 1fr;
}
</style>
