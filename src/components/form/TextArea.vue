<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
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
  hideDetails: {
    type: Boolean,
    default: false,
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

  <div class="mt-1 text-sm">
    <textarea
      :id="name"
      :name="name"
      :value="inputValue"
      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm
      focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
      @input="onInput"
    />
    <div v-if="!hideDetails" class="text-red-400 ml-1 text-xs min-h-[30px]">
      {{ errorMessage }}
    </div>
  </div>
</template>
