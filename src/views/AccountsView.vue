<template>
  <div class="accountView">
    <TitleBlock text="Учетные записи" />
    <SubtitleBlock
      text="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
    />
    <div v-if="accountStore.accounts.length">
      <FormHeader />
      <AccountList />
    </div>
    <AccountListEmpty v-else />
  </div>
</template>

<script setup>
import AccountList from '@/components/account/AccountList.vue'
import AccountListEmpty from '@/components/account/AccountListEmpty.vue'
import FormHeader from '@/components/form/FormHeader.vue'
import SubtitleBlock from '@/components/text/SubtitleBlock.vue'
import TitleBlock from '@/components/text/TitleBlock.vue'
import { useAccountStore } from '@/stores/account'

const accountStore = useAccountStore()
</script>

<style scoped>
.accountView {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
}
</style>
