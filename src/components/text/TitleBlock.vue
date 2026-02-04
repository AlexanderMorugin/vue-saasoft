<template>
  <div class="titleBlock">
    <h1 class="titleBlock__text">{{ props.text }}</h1>
    <ButtonAdd />
  </div>
</template>

<script setup>
import ButtonAdd from '../button/ButtonAdd.vue'

const props = defineProps({
  text: String,
})
</script>

<style scoped>
.titleBlock {
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
}
.titleBlock__text {
  font-family: 'Inter-SemiBold', sans-serif;
  font-size: 16px;
  color: var(--black-primary);
}
</style>
