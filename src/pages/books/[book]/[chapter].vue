<script setup lang="ts">
import { useChapterStore } from '~/store/store.chapter'

const route = useRoute()
const { book: bookName, chapter: chapterNum } = route.params
const id = useIdBuilder({ bookId: bookName, chapterId: chapterNum }, 'BBCCC')

const { chapterStore } = useChapterStore()
const { data: chapters, isPending } = chapterStore
  .useFind({ query: { chapterId: id }, onServer: true })
const chapter = computed(() => chapters.value ? chapters.value[0] : chapters.value)

const activeVerse = ref<number>(0)
</script>

<template>
  <div class="text-gray-800 text-2xl mt-8">
    {{ bookName }} {{ chapterNum }}
  </div>

  <div v-if="!isPending" class="space-y-8 pt-8">
    <div v-for="(verse, idx) of chapter.verses" :key="idx" @click="(activeVerse = idx)">
      <Verse :verse="verse" :is-active="activeVerse === idx" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: list
</route>
