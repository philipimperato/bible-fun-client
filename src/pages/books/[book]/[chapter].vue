<script setup lang="ts">
import { useChapterStore } from '~/store/store.chapters'

const route = useRoute()
const { book: bookName, chapter: chapterNum } = route.params
const id = useIdBuilder({ bookId: bookName, chapterId: chapterNum }, 'BBCCC')

const { chapterStore } = useChapterStore()
const { data: chapters, isPending } = chapterStore
  .useFind({ query: { chapterId: id }, onServer: true })
const chapter = computed(() => chapters.value ? chapters.value[0] : chapters.value)
const activeVerse = ref<number>(-1)
</script>

<template>
  <div class="text-gray-800 text-2xl mt-8 px-4">
    {{ bookName }} {{ chapterNum }}
  </div>

  <div v-if="!isPending">
    <div
      v-for="(verse, idx) of chapter.verses"
      :key="idx"
      @click="activeVerse = (activeVerse === idx) ? -1 : idx"
    >
      <Verse :verse="verse" :is-active="activeVerse === idx" />
      <hr>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: list
</route>
