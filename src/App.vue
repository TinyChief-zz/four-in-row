<template>
  <div id="app">
    <div class="container">
      <router-view/>

    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  min-height: 100vh;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
