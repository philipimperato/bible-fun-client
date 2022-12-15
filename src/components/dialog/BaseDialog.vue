<script setup lang="ts">
// const props = defineProps({
//   open: {
//     type: Boolean,
//     default: true,
//   },
// })

const emit = defineEmits(['close'])

// console.log(props)

// const isOpen = toRef(props, 'open')
const isOpen = ref(true)
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
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

      <div class="fixed inset-0 overflow-y-auto">
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
                <slot name="title" />
              </DialogTitle>

              <DialogDescription class="px-6">
                <slot name="content" />

                <div class="mt-4 bg-gray-50 px-6 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <slot name="actions" />
                </div>
              </DialogDescription>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
