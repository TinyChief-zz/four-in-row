<template>
  <header>
    <div class="container header-container">
      <div class="header-logo">
        <router-link to="/">
          <h1>Game Center</h1>
        </router-link>
      </div>
      <nav class="header-nav">
        <router-link class="header-nav__item" to="/">Home</router-link>
        <router-link class="header-nav__item" to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
header {
  width: 1100px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.header-container {
  justify-content: space-between;
  height: 60px;
}
.header-nav {
  display: flex;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    &:hover {
      background-color: rgba(black, 0.05)
    }
  }
}
.header-logo {
  display: flex;
  align-items: center;
}
</style>
