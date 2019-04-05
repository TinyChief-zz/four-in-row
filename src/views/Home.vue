<template>
  <div class="home">
    <h2 class="page-header">Наши игры</h2>
    <div class="container content-container">
      <div class="row" v-for="(chunk, i) in splitEvery(2, games)" :key="i">
        <div
          v-for="(game, j) in chunk"
          :key="j"
          class="content-item"
          @click="handleSelectGame(game)"
        >
          <div class="content-item__pic">
            <div v-if="game.inDevelopment" class="development">В разработке</div>
            <img v-else src="../assets/images/4-in-a-row-online-1.png" alt="four-in-row">
          </div>
          <div class="content-item__main">
            <h3 class="name">{{ game.name }}</h3>
            <p class="info">{{ game.info }}</p>
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

const games: Game[] = [
  {
    name: 'Четыре в ряд',
    info: '10 человек в игре, 3 человека ожидают',
    description: 'Собери 4 фишки в ряд быстрее оппонента, чтобы выиграть.',
    inDevelopment: false
  },
  {
    name: 'Быки и коровы',
    info: '10 человек в игре, 3 человека ожидают',
    description:
      'Постарайся первым отгадать трехзначное число с помощью специфичных подсказок.',
    inDevelopment: true
  },
  {
    name: 'Пинбол',
    info: '10 человек в игре, 3 человека ожидают',
    description:
      'Защищай свои ворота и постарайся забить мяч в ворота оппонента.',
    inDevelopment: true
  },
  {
    name: 'Тетрис',
    info: '10 человек в игре, 3 человека ожидают',
    description: 'Покажи свои способности в складировании блоков.',
    inDevelopment: true
  }
]

interface Game {
  readonly name: string
  readonly info: string
  readonly description: string
  readonly inDevelopment: boolean
}

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js + TypeScript App'
  splitEvery = splitEvery

  games: Game[] = games
  handleSelectGame (game: Game): void {
    console.log(game)
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  .row {
    flex-wrap: wrap;
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
.content-item__pic {
  min-width: 200px;
  height: 140px;
  margin-right: 20px;
  position: relative;
  .development {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(rgb(237, 211, 255), 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100%;
    width: auto;
  }
}

.content-item__main {
  // padding-top: 10px;
  .name {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .info {
    color: rgba(black, 0.6);
    margin-bottom: 15px;
  }
}

.content-item {
  display: flex;
  width: 400px;
}
</style>
