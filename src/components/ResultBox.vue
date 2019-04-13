<template>
  <div class="result" v-bind:class="{hasWinner: winner}">
    <div class="result-text">
      <h2>Победил: {{ winner === 'p1' ? firstPlayerName : secondPlayerName }}</h2>
    </div>
    <div class="result-buttons">
      <div class="result-button btn-again" @click="playAgain()">
        <span>Играть еще</span>
      </div>
      <div class="result-button btn-quit" @click="$router.push('/')">
        <span>На главную</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ResultBox extends Vue {
  @Prop() private winner!: 'p1' | 'p2' | '';
  firstPlayerName = 'player1'
  secondPlayerName = 'player2'
  playAgain () {
    this.$emit('initGame')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.result {
  z-index: 101;
  font-size: 20px;
  width: 70%;
  left: 50%;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  transform: translate(-50%, -100%);
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  transition: all 0.3s ease-in-out;
}
.result-text {
  text-align: center;
  padding: 20px 0;
  h2 { color: white }
}
.hasWinner {
  display: block;
  transform: translate(-50%, 0);
}
.result-buttons {
  display: flex;
  justify-content: space-around;
  height: 50px;
  border-top: 1px solid white;
}
.result-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:first-of-type {
    border-right: 1px solid white;
  }
}
.btn-again:hover {
  background-color: rgba(107, 255, 49, 0.3);
}
.btn-quit:hover {
  background-color: rgba(255, 46, 46, 0.3);
}
.btn-again {
  flex-basis: 75%;
}
.btn-quit {
  flex-basis: 25%;
}
</style>
