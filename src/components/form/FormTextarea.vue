<template>
  <div class="formFieldTextarea">
    <textarea
      :type="props.type"
      :id="props.name"
      :name="props.name"
      :placeholder="props.placeholder"
      :value="props.value"
      @change="updateValue"
      @blur="emit('blur')"
      :class="['formTextarea', { formTextarea_error: props.error.length }]"
    />

    <span v-for="item in props.error" :key="item.$uid" class="formTextarea__errorMessage">{{
      item.$message
    }}</span>

    <IconVisibilityOff
      v-if="props.value && props.name === 'passwordField' && props.type === 'password'"
      class="formField__button formField__button_visibility"
      @click="$emit('openPassword')"
    />
    <IconVisibility
      v-if="props.value && props.name === 'passwordField' && props.type === 'text'"
      class="formField__button formField__button_visibility"
      @click="$emit('openPassword')"
    />

    <IconClear
      v-if="props.value && props.name !== 'passwordField'"
      class="formField__button formField__button_clear"
      @click="$emit('clearInput')"
    />
  </div>
</template>

<script setup>
import IconClear from '../icon/IconClear.vue'
import IconVisibilityOff from '../icon/IconVisibilityOff.vue'
import IconVisibility from '../icon/IconVisibility.vue'

const props = defineProps({
  type: String,
  name: String,
  placeholder: String,
  value: String,
  error: String,
})

const emit = defineEmits(['update:value', 'blur', 'clearInput', 'openPassword'])

const updateValue = (e) => emit('update:value', e.target.value)
</script>
