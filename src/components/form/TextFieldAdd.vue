<script setup lang="ts">
import { toRef } from 'vue'
import { Form, useField } from 'vee-validate'
import * as Yup from 'yup'

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
  hideDetails: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'submit'])
const name = toRef(props, 'name')
const schema = Yup.object({
  test: Yup.string().required(),
})

const {
  value: inputValue,
  errorMessage,
  handleChange,
  meta,
} = useField(
  name,
  val => !!val,
  {
    initialValue: props.value,
    valueProp: props.value,
  },
)

const onInput = (event: any) => {
  handleChange(event, true)
  emit('update:modelValue', event.target.value)
}

const onSubmit = (event: any) => {
  emit('submit', inputValue)
}
</script>

<template>
  <div class="w-full">
    <label for="email" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <div class="mt-1">
      <div class="flex">
        <input
          :id="name"
          :name="name"
          :type="type"
          :value="inputValue"
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm
              focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-tr-none rounded-br-none"
          @input="onInput"
        >
        <button
          type="submit"
          :class="meta.valid ? 'btn-primary' : 'btn-disabled'"
          :disabled="!meta.valid"
          class="btn w-4/12 rounded-tl-none rounded-bl-none"
          @click="onSubmit"
        >
          Add
        </button>
      </div>
      <div v-if="!hideDetails" class="text-red-400 ml-1 text-xs min-h-[30px]">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>
