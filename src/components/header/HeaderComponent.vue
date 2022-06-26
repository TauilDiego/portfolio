<template>
  <q-header elevated class="">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> Portfolio </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
export default {
  name: "HeaderComponent",
};
</script>

<script lang="ts" setup>
import { leftDrawerOpen } from "@/App"

</script>