<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
  valueProp: props.value,
})

const onInput = (event: any) => {
  handleChange(event, true)
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <label for="email" class="block text-sm font-medium text-gray-700">
    {{ label }}
  </label>

  <div class="mt-1">
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="inputValue"
      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm
      focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      @input="onInput"
    >
    <div class="text-red-400 ml-1 text-xs min-h-[30px]">
      {{ errorMessage }}
    </div>
  </div>
</template>
