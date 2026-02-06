<template>
  <div class="formHeader">
    <span class="formHeader__name">Метки</span>
    <span class="formHeader__name">Тип записи</span>
    <span class="formHeader__name">Логин</span>
    <span class="formHeader__name">Пароль</span>
  </div>
</template>

<style scoped>
.formHeader {
  display: grid;
  grid-template-columns: 320px 320px 320px 320px 40px;
  gap: 20px;
}
.formHeader__name {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  color: var(--mask-black-secondary);
}
</style>
