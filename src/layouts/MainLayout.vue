<template>
  <q-layout view="lHh lpr lff" class="q-app">
    <HeaderCustom />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderCustom from '../components/HeaderCustom.vue'
export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderCustom
  },

  setup () {
    return {
    }
  }
})
</script>
<style lang="scss" scoped>

.q-app {
  margin: 0 auto;
  padding: 0;
  max-width: 1440px;
  font-family: 'League Spartan', sans-serif;
}

</style>
