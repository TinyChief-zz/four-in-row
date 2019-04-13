<template>
  <div class="game-side">
    <div class="game-side__header">
      <h2>{{ game.name }}</h2>
      <unicon name="cog"></unicon>
    </div>
    <div class="game-side__body">
      <div class="body-score">
        <div class="player-1">
          <img src="@/assets/images/profiles/001-man.png" alt="profile">
          <h3>Andry</h3>
        </div>
        <div class="current-score">
          <h1>{{ `${currentScore.p1.score} : ${currentScore.p2.score}` }}</h1>
        </div>
        <div class="player-2">
          <img src="@/assets/images/profiles/008-girl-1.png" alt="profile">
          <h3>Julia</h3>
        </div>
      </div>
      <div class="body-actions">
        <div class="body-actions__item">
          <unicon name="star"></unicon>
        </div>
        <div class="body-actions__item">
          <unicon name="comment-alt-lines"></unicon>
        </div>
        <div class="body-actions__item">
          <unicon name="chart-bar"></unicon>
        </div>
        <div class="body-actions__item">
          <unicon name="exclamation-circle"></unicon>
        </div>
      </div>
    </div>
    <div class="game-side__chat">
      <div class="chat-window">
        <p>Здесь в будущем будет чат.</p>
      </div>
      <div class="chat-actions"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { INFO_SELECTED_GAME, SCORE_CURRENT } from '@/store/const'
import { Game } from '@/types'

@Component
export default class GameSide extends Vue {
  game: Game = this.$store.getters[INFO_SELECTED_GAME]
  get currentScore () {
    return this.$store.getters[SCORE_CURRENT]
  }
}
</script>

<style lang="scss" scoped>
.game-side__header {
  display: flex;
  :nth-child(1) {
    flex: 1
  }
  svg {
    cursor: pointer;
  }
}
[class^="game-side__"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid var(--border);
  border-radius: 10px;
  background-color: var(--accent);
}
.body-score {
  display: flex;
  justify-content: space-around;
  [class^="player"] {
    text-align: center;
  }
  img {
    width: 90px;
  }
  .current-score {
    display: flex;
    align-items: center;
  }
}
.body-actions {
  display: flex;
  justify-content: center;
  &__item {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: white
    }
    &:hover {
      background-color: rgba(black, 0.1);
    }
  }
}
.game {
  display: flex;
}
.game-field {
  flex: 1;
  margin-right: 30px;
}
.game-side {
  width: 350px;
}
</style>
