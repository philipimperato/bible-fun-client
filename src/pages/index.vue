<script setup lang="ts">
</script>

<template>
  <div class="mx-auto w-full md:w-1/2 mt-16">
    <div class="text-lg border-b mb-4 pt-2">
      Tech
    </div>
    <div class="text-gray-600">
      <div class="uppercase text-sm text-gray-400">
        Frontend
      </div>
      <ul>
        <li>- Vuejs 3</li>
        <li>- Vite</li>
        <li>- Feathers Pinia</li>
        <li>- Socketio</li>
        <li>- Tailwindcss</li>
      </ul>

      <div class="uppercase text-sm text-gray-400 mt-4">
        Backend
      </div>
      <ul>
        <li>- FeathersJs (Dove)</li>
        <li>- NodeJS, Express</li>
      </ul>
    </div>

    <div class="text-lg border-b mb-4 mt-16">
      Pages
    </div>
    <div class="text-gray-600">
      <ul>
        <li>
          <router-link as="a" to="/login">
            - Login
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
