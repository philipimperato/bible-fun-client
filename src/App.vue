<script setup lang="ts">
useHead({
  title: 'Bible Fun',
})
</script>

<template>
  <Notifications />
  <router-view />
  <div id="modals" />
</template>
