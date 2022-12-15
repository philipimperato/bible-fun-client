<script setup lang="ts">
import { Form } from 'vee-validate'
import { storeToRefs } from 'pinia'

interface FormProps {
  schema: Object
  submit: (formData: any) => unknown
}

const props = defineProps<FormProps>()
const { schema, submit } = toRefs(props)

const modal = useModal()
const { isOpen } = storeToRefs(modal)
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @keydown.esc="modal.close()">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <Form
        v-slot="{ meta }"
        :validation-schema="schema"
        @submit="submit"
      >
        <div class="fixed inset-0 overflow-y-auto">
          <button tabindex="-1" class="btn rounded-full bg-gray-100 w-14 h-14 absolute top-5 right-5" @click="modal.close()">
            <mdi-close class="w-8 h-8 text-gray-600 mt-3" />
          </button>
          <div
            class="flex min-h-full items-center justify-center p-2 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 p-6"
                >
                  <slot name="title" :meta="meta" />
                </DialogTitle>

                <DialogDescription>
                  <slot name="content" :meta="meta" />
                </DialogDescription>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Form>
    </Dialog>
  </TransitionRoot>
</template>
