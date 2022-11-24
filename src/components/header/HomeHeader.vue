<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> projects </q-toolbar-title>
      <q-space></q-space>

      <q-btn-group outline rounded>
        <q-btn
          v-for="(option, i) in modeOptions"
          :key="i"
          :outline="option.value !== darkMode"
          color="secondary"
          :label="option.label"
          @click="definirTema(option.value)"
        />
      </q-btn-group>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
export default {
  name: "HeaderComponent",
};
</script>

<script lang="ts" setup>
import { darkMode, modeOptions, setDarkMode } from "@/App";
import { leftDrawerOpen } from "@/components/drawer/SideDrawer";
import { ref, Ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const temaEscolhido: Ref<boolean | "auto"> = ref("auto");

function definirTema(option: boolean|"auto"): void {
  temaEscolhido.value = option
}

watch(temaEscolhido, (newValue: boolean | "auto") => {
  console.log(newValue);

  setDarkMode(newValue);
});
</script>

