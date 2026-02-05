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
