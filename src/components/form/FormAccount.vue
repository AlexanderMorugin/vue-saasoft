<template>
  <div class="formAccount">
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
        v-model:value="v$.loginField.$model"
        :error="v$.loginField.$errors"
        @clearInput="loginField = null"
      />
      <FormInput
        v-if="recordTypeField.name !== 'LDAP'"
        :type="passwordType"
        name="passwordField"
        placeholder="Значение"
        v-model:value="v$.passwordField.$model"
        :error="v$.passwordField.$errors"
        @openPassword="openPassword"
      />
    </div>
    <ButtonDelete
      v-if="markField || loginField || passwordField"
      @deleteAccount="accountStore.deleteAccount(account.id)"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, maxLength } from '@vuelidate/validators'
import { useAccountStore } from '@/stores/account'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import ButtonDelete from '../button/ButtonDelete.vue'

const { account } = defineProps(['account'])

const accountStore = useAccountStore()

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

// Валидация
const rules = computed(() => ({
  loginField: {
    required: helpers.withMessage('Укажите логин', required),
    maxLength: helpers.withMessage('Не более 100 символов', maxLength(10)),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    maxLength: helpers.withMessage('Не более 100 символов', maxLength(10)),
  },
}))

const v$ = useVuelidate(rules, {
  loginField,
  passwordField,
})

// const isValid = computed(() => v$.value.$errors)
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
