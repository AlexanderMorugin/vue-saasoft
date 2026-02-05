import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface IAccount {
  id: number
  mark?: string | null
  recordType?: string | null
  login?: string | null
  password?: string | null
}

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<IAccount[] | null>([])

  const localStorageAccounts = localStorage.getItem('accounts')

  if (localStorageAccounts) {
    accounts.value = JSON.parse(localStorageAccounts)
  }

  const createAccount = () => {
    if (!accounts.value.length) {
      accounts.value.push({
        id: 1,
        recordType: null,
        mark: null,
        login: null,
        password: null,
      })
    } else {
      accounts.value.push({
        id: accounts.value[accounts.value.length - 1].id + 1,
        recordType: null,
        mark: null,
        login: null,
        password: null,
      })
    }

    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  const updateAccount = (name: string, data: string, recordType: string, accountId: number) => {
    if (name === 'markField') {
      accounts.value = accounts.value.map((item) =>
        item.id === accountId ? { ...item, recordType: recordType, mark: data } : item,
      )
      localStorage.setItem('accounts', JSON.stringify(accounts.value))
    }
    if (name === 'loginField') {
      accounts.value = accounts.value.map((item) =>
        item.id === accountId ? { ...item, recordType: recordType, login: data } : item,
      )
      localStorage.setItem('accounts', JSON.stringify(accounts.value))
    }
    if (name === 'passwordField') {
      accounts.value = accounts.value.map((item) =>
        item.id === accountId ? { ...item, recordType: recordType, password: data } : item,
      )
      localStorage.setItem('accounts', JSON.stringify(accounts.value))
    }
  }

  const updateAccountRecordType = (recordType: string, accountId: number) => {
    accounts.value = accounts.value.map((item) =>
      item.id === accountId ? { ...item, recordType: recordType } : item,
    )

    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  const deleteAccount = (accountId: number) => {
    accounts.value = accounts.value.filter((item) => item.id !== accountId)

    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  return {
    accounts,
    localStorageAccounts,
    createAccount,
    updateAccount,
    updateAccountRecordType,
    deleteAccount,
  }
})
