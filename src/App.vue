<template>
  <div id="app">
    <my-header />
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/layout/Header.vue' // @ is an alias to /src

@Component({
  components: {
    'my-header': Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
