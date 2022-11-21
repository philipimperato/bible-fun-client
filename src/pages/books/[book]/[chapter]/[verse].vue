<script setup lang="ts">
const route = useRoute()
const { book, chapter, verse } = route.params

const esvStore = useESV()
const { data } = esvStore.useFind({ query: { book, chapter }, onServer: true })
const verses = computed(() => data.value[0]?.passages)

console.log(data)
</script>

<template>
  <div class="text-gray-600 px-4 text-base font-bold py-2 border-b bg-gray-50 border-gray-200">
    {{ chapter }}
  </div>

  <div class="space-y-4">
    <div v-for="(verseText, idx) of verses" :key="idx" class="mx-8 p-2">
      {{ verseText }}
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
