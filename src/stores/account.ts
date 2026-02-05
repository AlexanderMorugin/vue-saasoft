import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface IAccount {
  id: number
  mark?: string | null
  login?: string | null
  password?: string | null
}

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<IAccount[] | null>([])
  // const account = ref<IAccount | null>(null)

  const createAccount = () => {
    if (!accounts.value.length) {
      accounts.value.push({
        id: 1,
        mark: null,
        login: null,
        password: null,
      })
    } else {
      accounts.value.push({
        id: accounts.value[accounts.value.length - 1].id + 1,
        mark: null,
        login: null,
        password: null,
      })
    }
  }

  const deleteAccount = (accountId: number) => {
    accounts.value = accounts.value.filter((item) => item.id !== accountId)
  }

  return { accounts, createAccount, deleteAccount }
})
