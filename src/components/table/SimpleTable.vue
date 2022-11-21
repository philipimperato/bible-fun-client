<script setup lang="ts">
import { useUsers } from '~/store/users.store'

const userStore = useUsers()
const { data: users, isPending } = userStore.useFind({ query: {}, onServer: true })
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>User</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody v-if="!isPending">
      <tr
        v-for="user in users"
        :key="user.id"
      >
        <td>{{ user.email }}</td>
        <td>{{ user.status }}</td>
      </tr>
    </tbody>
  </table>
</template>
