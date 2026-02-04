<template>
  <div class="formField">
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="formInput"
    />

    <!-- <TransitionGroup name="list" tag="ul">
      <span v-for="item in error" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </TransitionGroup> -->

    <IconVisibilityOff
      v-if="value && name === 'passwordField' && type === 'password'"
      class="formField__button formField__button_visibility"
      @click="$emit('openPassword')"
    />
    <IconVisibility
      v-if="value && name === 'passwordField' && type === 'text'"
      class="formField__button formField__button_visibility"
      @click="$emit('openPassword')"
    />

    <IconClear
      v-if="value && name !== 'passwordField'"
      class="formField__button formField__button_clear"
      @click="$emit('clearInput')"
    />
  </div>
</template>

<script setup>
import IconClear from '../icon/IconClear.vue'
import IconVisibilityOff from '../icon/IconVisibilityOff.vue'
import IconVisibility from '../icon/IconVisibility.vue'

const {
  type,
  name,
  placeholder,
  value,
  // ,   error
} = defineProps(['type', 'name', 'placeholder', 'value', 'error'])

const emit = defineEmits(['update:value', 'clearInput', 'openPassword'])

const updateValue = (e) => emit('update:value', e.target.value)
</script>

<style scoped>
.formField {
  position: relative;
}
.formInput {
  width: 100%;
  height: 40px;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--black-primary);
  border-radius: var(--border-radius-xxs);
  border: 1px solid var(--mask-black-thirdly);
  padding-left: 13px;
  padding-right: 40px;
  transition: 0.25s ease all;
}
.formInput:focus {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--black-primary);
  outline: 0;
  border: 1px solid var(--blue-primary);
}
.formInput::placeholder {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--mask-black-secondary);
  transition: 0.5s ease;
}
.formInput:focus::placeholder {
  color: transparent;
}
.formField__button {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 13px;
  /* width: 18px;
  height: 18px; */
  fill: var(--mask-black-secondary);
  transition: 0.2s ease;
  cursor: pointer;
}
.formField__button:hover {
  fill: var(--black-primary);
}
.formField__button_clear {
  width: 18px;
  height: 18px;
}
.formField__button_visibility {
  width: 24px;
  height: 24px;
}
</style>
