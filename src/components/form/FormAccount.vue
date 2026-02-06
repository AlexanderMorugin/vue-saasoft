<template>
  <div class="formAccount">
    <FormTextarea
      type="text"
      name="markField"
      placeholder="Значение"
      v-model:value="v$.markField.$model"
      :error="v$.markField.$errors"
      @blur="!v$.markField.$errors.length && updateAccount((name = 'markField'), markField)"
      @clearInput="clearMarkInput"
    />

    <FormSelect
      :options="accountStore.recordTypes"
      v-model:value="recordTypeField"
      :account="account"
    />

    <div
      :class="[
        'formAccount__login',
        {
          formAccount__login_active: account.recordType === 'LDAP',
        },
      ]"
    >
      <FormInput
        type="text"
        name="loginField"
        placeholder="Значение"
        v-model:value="v$.loginField.$model"
        :error="v$.loginField.$errors"
        @blur="!v$.loginField.$errors.length && updateAccount((name = 'loginField'), loginField)"
        @clearInput="clearLoginInput"
      />
      <FormInput
        v-if="account.recordType !== 'LDAP'"
        :type="passwordType"
        name="passwordField"
        placeholder="Значение"
        v-model:value="v$.passwordField.$model"
        :error="v$.passwordField.$errors"
        @blur="
          !v$.passwordField.$errors.length && updateAccount((name = 'passwordField'), passwordField)
        "
        @openPassword="openPassword"
      />
    </div>
    <ButtonDelete v-if="account.id" @deleteAccount="accountStore.deleteAccount(account.id)" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, maxLength } from '@vuelidate/validators'
import { useAccountStore } from '@/stores/account'
import FormInput from './FormInput.vue'
import FormTextarea from './FormTextarea.vue'
import FormSelect from './FormSelect.vue'
import ButtonDelete from '../button/ButtonDelete.vue'

const { account } = defineProps(['account'])

const accountStore = useAccountStore()

// const markField = ref(account.mark || null)
const markField = ref(account.mark)
const recordTypeField = ref(account.recordType)
const loginField = ref(account.login || null)
const passwordField = ref(account.password || null)
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
  markField: {
    maxLength: helpers.withMessage('Не более 50 символов', maxLength(50)),
  },
  loginField: {
    required: helpers.withMessage('Укажите логин', required),
    maxLength: helpers.withMessage('Не более 100 символов', maxLength(100)),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    maxLength: helpers.withMessage('Не более 100 символов', maxLength(100)),
  },
}))

const v$ = useVuelidate(rules, {
  markField,
  loginField,
  passwordField,
})

const updateAccount = (name, data) => {
  accountStore.updateAccount(name, data, recordTypeField.value?.name, account.id)
}

const clearMarkInput = () => {
  updateAccount('markField', null, recordTypeField.value?.name, account.id)
  markField.value = null
}

const clearLoginInput = () => {
  updateAccount('loginField', null, recordTypeField.value?.name, account.id)
  loginField.value = null
}
</script>

<style scoped>
.formAccount {
  display: grid;
  grid-template-columns: 320px 320px 660px 40px;
  gap: 20px;
  height: fit-content;
}
.formAccount__login {
  display: grid;
  grid-template-columns: 320px 320px;
  gap: 20px;
}
.formAccount__login_active {
  grid-template-columns: 1fr;
}
</style>
