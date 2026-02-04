import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface IAccount {
  mark: string
  login: string
  password: string
}

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<IAccount[] | null>([])
  const account = ref<IAccount | null>(null)

  const createAccount = (data: IAccount) => {
    accounts.value.push(data)
  }

  return { accounts, account, createAccount }
})
