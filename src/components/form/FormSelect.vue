<template>
  <div class="formField" ref="dropDown">
    <div class="formInput dropDownOption" @click="openOptionSelect">
      <span>{{ mappedSelectedOption }}</span>
      <IconArrow
        :class="[
          'formField__button formField__arrow',
          { formField__arrow_active: isDropDownVisible },
        ]"
      />
    </div>
    <ul :class="['optionList', { optionList_active: isDropDownVisible }]">
      <li
        v-for="option in options"
        :key="option.id"
        :class="['optionText', { optionText_active: isDropDownVisible }]"
        @click="closeOptionSelect(option)"
      >
        {{ option.name || option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import IconArrow from '../icon/IconArrow.vue'

const { options } = defineProps(['options'])
const emit = defineEmits(['update:value'])

const dropDown = ref(null)
const selectedOption = ref(null)
const isDropDownVisible = ref(false)

const mappedSelectedOption = computed(() => {
  return selectedOption.value?.name || selectedOption.value?.value || 'Выберите тип'
})

const openOptionSelect = () => (isDropDownVisible.value = true)

const closeOptionSelect = (option) => {
  isDropDownVisible.value = false
  selectedOption.value = option
  emit('update:value', option)
}

const closeDropDown = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isDropDownVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown)
})
</script>

<style scoped>
.dropDownOption {
  display: flex;
  align-items: center;
  color: var(--black-primary);
  cursor: pointer;
  transition: 0.25s ease;
}
.optionList {
  position: absolute;
  top: 42px;
  right: 0;
  width: 100%;
  background: var(--blue-primary);
  height: 0;
  transition: 0.25s ease;
}
.optionList_active {
  height: 80px;
  z-index: 1;
}
.arrowDropIcon_active {
  transform: rotate(180deg);
}
.optionText {
  display: none;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--white-primary);
  padding: 12px 13px;
  border: 1px solid var(--white-primary);
  cursor: pointer;
}
.optionText:hover {
  background: var(--blue-secondary);
}
.optionText_active {
  display: block;
}
</style>
