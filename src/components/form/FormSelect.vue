<template>
  <div class="formField" ref="dropDown">
    <div class="formInput dropDownOption" @click="toggleOptionSelect">
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
        v-for="option in props.options"
        :key="option.id"
        :class="['optionText', { optionText_active: isDropDownVisible }]"
        @click="closeOptionSelect(option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useAccountStore } from '@/stores/account'
import IconArrow from '../icon/IconArrow.vue'

const props = defineProps({
  options: Array,
  account: {
    id: Number,
    mark: String,
    recordType: String,
    login: String,
    password: String,
  },
})
const emit = defineEmits(['update:value'])

const accountStore = useAccountStore()

const dropDown = ref(null)
const selectedOption = ref(null)
const isDropDownVisible = ref(false)

const toggleOptionSelect = () => (isDropDownVisible.value = !isDropDownVisible.value)

const mappedSelectedOption = computed(() => {
  return selectedOption.value?.name || props.account.recordType || props.options[0].name
})

const closeOptionSelect = (option) => {
  isDropDownVisible.value = false
  selectedOption.value = option
  accountStore.updateAccountRecordType(mappedSelectedOption, props.account.id)
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
