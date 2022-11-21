<script setup lang="ts">
const bookStore = useBooks()
const { data: books } = bookStore.useFind({ query: {}, onServer: true })
</script>

<template>
  <router-link v-for="book of books" :key="book.id" :to="`books/${book.name}/61/1`">
    {{ book.name }}
  </router-link>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
