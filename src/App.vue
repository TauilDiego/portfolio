<template>
  <nav>
    <router-link to="/">vitrine</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>
