<template>
  <div class="subtitleBlock">
    <div class="subtitleBlock__iconBox">
      <IconQuestion class="subtitleBlock__icon" />
    </div>
    <p class="subtitleBlock__text">{{ props.text }}</p>
  </div>
</template>

<script setup>
import IconQuestion from '../icon/IconQuestion.vue'

const props = defineProps({
  text: String,
})
</script>

<style scoped>
.subtitleBlock {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--mask-black-fifthly);
  border-radius: var(--border-radius-xxs);
  padding: 5px 10px;
}
.subtitleBlock__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  color: var(--black-primary);
}
.subtitleBlock__iconBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--black-primary);
  padding: 5px;
}
.subtitleBlock__icon {
  width: 18px;
  height: 18px;
  fill: var(--black-primary);
}
</style>
