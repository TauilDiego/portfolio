<template>
  <q-layout view="hHh Lpr lFf">
    <HomeHeader />
    <SideDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import HomeHeader from "@/components/header/HomeHeader.vue";
import SideDrawer from "./components/drawer/SideDrawer.vue";

export default {
  name: "app",
  components: { HomeHeader, SideDrawer },
  
  mounted() {
    // setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
  },
};
</script>
