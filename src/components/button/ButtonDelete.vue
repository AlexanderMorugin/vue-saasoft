<template>
  <button class="buttonDelete">
    <IconDelete class="buttonDelete__icon" />
  </button>
</template>

<script setup>
import IconDelete from '../icon/IconDelete.vue'
</script>

<style scoped>
.buttonDelete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  transition: 0.2s ease;
}
.buttonDelete__icon {
  width: 28px;
  height: 28px;
  fill: var(--mask-black-secondary);
}
.buttonDelete:hover .buttonDelete__icon {
  fill: var(--black-primary);
}
</style>
