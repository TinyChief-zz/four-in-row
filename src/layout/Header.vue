<template>
  <header>
    <div class="container header-container">
      <router-link to="/" class="header-logo">
        <h1>Game Center</h1>
      </router-link>
      <nav class="header-nav">
        <router-link class="header-nav__item" to="/">Главная</router-link>
        <router-link class="header-nav__item" to="/about">О проекте</router-link>
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
  background-color: var(--accent);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid var(--border);
  border-top: none;
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
    margin-right: 20px;
    // &:last-of-type {
    //   margin-right: 0;
    // }
    &:hover {
      background-color: rgba(black, 0.05)
    }
  }
}
.header-logo {
  display: flex;
  align-items: center;
  h1 {
    color: white;
  }
  padding: 0 15px;
}
</style>
