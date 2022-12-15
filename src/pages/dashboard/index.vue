<script setup lang="ts">
const bookStore = useBooks()
const { data: books } = bookStore.useFind({ query: {}, onServer: true })
const { data: book } = bookStore.useGet(4, { onServer: true })
</script>

<template>
  <h1>Hello!</h1>
  <!-- <router-link v-for="book of books" :key="book.id" :to="`books/${book.name}/61/1`">
    {{ book.name }}
  </router-link> -->
</template>

<route lang="yaml">
meta:
  layout: default
</route>
