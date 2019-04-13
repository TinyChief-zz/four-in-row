<template>
  <div id="app">
    <my-header/>
    <my-modal v-if="isSelectingGame"/>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/layout/Header.vue'
import Modal from '@/components/Modal.vue'
import { MODAL_IS_SELECTING } from '@/store/const/'

@Component({
  components: {
    'my-header': Header,
    'my-modal': Modal
  }
})
export default class App extends Vue {
  get isSelectingGame () {
    return this.$store.getters[MODAL_IS_SELECTING]
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
}
</style>
