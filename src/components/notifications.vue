<script setup lang="ts">
import type { Ref } from 'vue'
import type { Notification } from '~/models/notification'
import { useNotifications } from '~/store/notifications.store'

const show: Ref<boolean> = ref(false)
const notifications: Ref<Notification[]> = ref([])
const store = useNotifications()

store.$subscribe((mutation, state) => {
  const notificationsFromStore = Object.values(state.itemsById)
  notifications.value = notificationsFromStore
  show.value = notificationsFromStore.length > 0
})

const close = (id: string | undefined) => store.removeFromStore({ id })
</script>

<template>
  <TransitionRoot
    appear
    :show="show"
    enter="transform transition duration-[400ms]"
    enter-from="opacity-0 rotate-[-120deg] scale-50"
    enter-to="opacity-100 rotate-0 scale-100"
    leave="transform duration-200 transition ease-in-out"
    leave-from="opacity-100 rotate-0 scale-100 "
    leave-to="opacity-0 scale-95 "
  >
    <div
      aria-live="assertive"
      class="flex flex-col pointer-events-none fixed inset-0 px-4 py-6 sm:p-6"
    >
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="flex flex-col w-full mb-2"
      >
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
          <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
          <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="show" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow ring-1 ring-black ring-opacity-5">
              <div class="p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <bx:error-circle class="h-6 w-6 text-red-500" aria-hidden="true" />
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900">
                      {{ notification.title }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      {{ notification.msg }}
                    </p>
                  </div>
                  <div class="ml-4 flex flex-shrink-0">
                    <button type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="close(notification.id)">
                      <span class="sr-only">Close</span>
                      <ep:close class="h-4 w-4 text-gray-400 hover:text-gray-600" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </TransitionRoot>
</template>
