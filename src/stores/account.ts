import { ref } from 'vue'
import { defineStore } from 'pinia'

export type TMark = {
  text: string
}

export interface IAccount {
  id?: number
  mark?: TMark[] | null
  recordType?: string | null
  login?: string | null
  password?: string | null
}

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<IAccount[] | null>([])

  const recordTypes = ref([
    { id: 1, name: 'Локальная' },
    { id: 2, name: 'LDAP' },
  ])

  const localStorageAccounts = localStorage.getItem('accounts')

  if (localStorageAccounts) {
    accounts.value = JSON.parse(localStorageAccounts)
  }

  const createAccount = () => {
    if (!accounts.value.length) {
      accounts.value.push({
        id: 1,
        recordType: recordTypes.value[0].name,
        mark: null,
        login: null,
        password: null,
      })
    } else {
      accounts.value.push({
        id: accounts.value[accounts.value.length - 1].id + 1,
        recordType: recordTypes.value[0].name,
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
        item.id === accountId
          ? {
              ...item,
              recordType: recordType,
              mark: data
                ? data.split(';').map((item) => ({
                    text: item.trim(),
                  }))
                : null,
            }
          : item,
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
      item.id === accountId ? { ...item, recordType: recordType, password: null } : item,
    )

    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  const deleteAccount = (accountId: number) => {
    accounts.value = accounts.value.filter((item) => item.id !== accountId)

    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  return {
    accounts,
    recordTypes,
    localStorageAccounts,
    createAccount,
    updateAccount,
    updateAccountRecordType,
    deleteAccount,
  }
})
