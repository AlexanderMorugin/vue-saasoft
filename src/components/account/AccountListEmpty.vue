<template>
  <div class="accountListEmpty">
    <span class="accountListEmpty__text">Учетных записей нет...</span>
  </div>
</template>

<style scoped>
.accountListEmpty {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
.accountListEmpty__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: var(--black-primary);
}
</style>
