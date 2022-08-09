<template>
  {{ leftDrawerOpen }}
  <q-drawer v-model="leftDrawerOpen">
    <q-scroll-area class="fit">
      <q-layout view="hhh lpr LFF">
        <div class="body">
          <div>
            <div style="max-width: 350px">
              <q-list bordered separator>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <img
                      style="height: 50px; width: 50px"
                      src="https://cdn3.vectorstock.com/i/thumb-large/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg"
                      alt="pessoa login"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Login</q-item-label>
                    <q-item-label caption>cadastre-se</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>

          <q-footer>
            <q-toolbar>
              <q-icon name="custom-github"></q-icon>
              <a href="https://github.com/TauilDiego" target="_blank"></a>
            </q-toolbar>
            <div></div>
          </q-footer>
        </div>
      </q-layout>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">
export default {
  name: "SideDrawer",
};
</script>

<script lang="ts" setup>
import { darkMode, setDarkMode, modeOptions } from "@/App";
import { ref, Ref, watch } from "vue";
import { leftDrawerOpen } from "./SideDrawer";

const temaEscolhido: Ref<boolean | "auto"> = ref("auto");

watch(temaEscolhido, (newValue: boolean | "auto") => {
  console.log(newValue);

  setDarkMode(newValue);
});
</script>


<style lang="scss" scoped>
.body--light {
  background: #fef;
}

.body--dark {
  background: #1d1d1d;
}
</style>