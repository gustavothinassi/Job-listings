<template>
  <q-header class="header">
      <div class="row flex justify-center">
        <div class="col-9 state-div"></div>
      </div>
    </q-header>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>
<style scoped>
/* @import '../css/quasar.variables.scss';
 */
.state-div {
  background-color: #fff;
  height: 60px!important;
  position: absolute;
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

}

.header {
  background-image: url('../assets/images/bg-header-desktop.svg');
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100px;
}

@media only screen and (max-width: 375px) {
  .header {
    background-image: url('../assets/images/bg-header-mobile.svg');
    background-position: center;
  }
}
</style>
