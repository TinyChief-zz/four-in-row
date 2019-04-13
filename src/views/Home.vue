<template>
  <div class="home">
    <h2 class="page-header">Доступные игры</h2>
    <div class="container content-container">
      <div
        class="row"
        v-for="(chunk, i) in splitEvery(2, games.filter(el => !el.inDevelopment))"
        :key="i"
      >
        <div
          v-for="(game, j) in chunk"
          :key="j"
          class="content-item"
          @click="!game.inDevelopment && handleSelectGame(game.id)"
        >
          <div class="content-item__pic">
            <div v-if="game.inDevelopment" class="development">В разработке</div>
            <img v-else src="../assets/images/4-in-a-row-pic.png" alt="four-in-row">
          </div>
          <div class="content-item__main">
            <h3 class="name">{{ game.name }}</h3>
            <!-- <p class="info">{{ game.info }}</p> -->
            <p class="description">{{ game.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header">Игры в разработке</h2>
    <div class="container content-container">
      <div
        class="row"
        v-for="(chunk, i) in splitEvery(2, games.filter(el => el.inDevelopment))"
        :key="i"
      >
        <div
          v-for="(game, j) in chunk"
          :key="j"
          class="content-item"
        >
          <div class="content-item__pic">
            <div class="development">В разработке</div>
          </div>
          <div class="content-item__main">
            <h3 class="name">{{ game.name }}</h3>
            <!-- <p class="info">{{ game.info }}</p> -->
            <p class="description">{{ game.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { splitEvery } from 'ramda'
import { INFO_GAMES, INFO_SELECT_GAME } from '../store/const/'
import { Game } from '@/types'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js + TypeScript App'
  splitEvery = splitEvery

  games = this.$store.getters[INFO_GAMES]
  handleSelectGame (id: number): void {
    this.$store.dispatch(INFO_SELECT_GAME, id)
    this.$store.state.modalIsSelecting = true
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  margin-bottom: 30px;
  .row {
    flex-wrap: wrap;
    margin-bottom: 30px;
    justify-content: space-between;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
.content-item__pic {
  min-width: 150px;
  height: 120px;
  margin-right: 20px;
  position: relative;
  .development {
    position: absolute;
    width: 150px;
    height: 100%;
    background-color: rgba(rgb(237, 211, 255), 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 150px;
    height: auto;
  }
}

.content-item__main {
  // padding-top: 10px;
  .name {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .info {
    font-size: 14px;
    margin-bottom: 15px;
  }
}

.content-item {
  padding: 15px;
  background-color: var(--accent);
  border-radius: 15px;
  display: flex;
  width: 450px;
  cursor: pointer;
}
</style>
