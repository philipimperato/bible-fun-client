<script setup lang="ts">
import type { PropType } from 'vue'
import type { Verse } from '~/models/verse'

const props = defineProps({
  verse: Object as PropType<Verse>,
  isActive: {
    type: Boolean,
    defaultValue: false,
  },
})

const isActive = toRef(props, 'isActive')
const verse = toRef(props, 'verse')
const activeAction = ref('note')
</script>

<template>
  <div class="pb-2">
    <span class="text-gray-500">{{ verse?.verse }}</span> {{ verse?.verseText }}
  </div>

  <div v-if="isActive">
    <div class="border-y-2 p-2 border-gray-300 flex items-center">
      <material-symbols:comment-bank-rounded class="pt-1 h-6 w-6 text-gray-600" aria-hidden="true" />
      <div class="pl-1" :class="{ 'font-bold': activeAction === 'note' }">
        Note
      </div>
    </div>

    <div v-if="activeAction === 'note'" class="pt-2 py-2">
      <TextArea name="Note" label="" hide-details />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
