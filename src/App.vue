<script setup lang="ts">
useHead({
  title: 'Bible Fun',
})
</script>

<template>
  <Notifications />
  <div class="text-blue-700 px-4 text-base font-bold py-2 border-b bg-blue-50 border-blue-200">
    BibleFun
  </div>
  <router-view />
</template>
