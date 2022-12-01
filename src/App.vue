<script setup lang="ts">
useHead({
  title: 'Bible Fun',
})
</script>

<template>
  <Notifications />
  <div class="text-blue-900 px-8 text-base font-bold py-2 shadow-sm sticky top-0 bg-white">
    BibleFun
  </div>
  <router-view />
</template>
