<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />

    {{ leftDrawerOpen }}


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: "app"
};
</script>

<script lang="ts" setup>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import { leftDrawerOpen } from "./App";
import { computed } from "@vue/reactivity";

let userId = 1231231;
let userName = "diego";
const user = computed(() => { 
  return {
    userName,
    userId
    } 
  })

let footerText = "texto do footer";

let drawerOption = true;
function changeDrawerOption() {
  drawerOption = !drawerOption;
}
</script>
