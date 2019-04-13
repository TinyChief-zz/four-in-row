<template>
  <div class="modal-view" @click.self="handleUnselectGame">
    <div class="modal-wrapper">
      <div class="modal-slider"></div>
      <div class="modal-text">

          <h3 class="name">{{ game.name }}</h3>
          <!-- <p class="info">{{ game.info }}</p> -->
          <p class="description">{{ game.description }}</p>
      </div>
      <div class="modal-rooms">
        <div class="new-room modal-rooms__item" @click="handleRouteGame">
          <span>+</span>
          <p>Новая комната</p>
        </div>
        <div class="modal-rooms__item">

        </div>
        <div class="modal-rooms__item">

        </div>
        <div class="modal-rooms__item">

        </div>
        <div class="modal-rooms__item">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { INFO_SELECTED_GAME, INFO_UNSELECT_GAME } from '@/store/const/'
import { Game } from '@/types'

@Component({})
export default class Modal extends Vue {
  game: Game = this.$store.getters[INFO_SELECTED_GAME]
  handleUnselectGame (): void {
    this.$store.dispatch(INFO_UNSELECT_GAME)
    this.$store.state.modalIsSelecting = false
  }
  handleRouteGame ():void {
    this.$store.state.modalIsSelecting = false
    this.$router.push({ name: 'FourInARow' })
  }
}
</script>

<style lang="scss">
.modal-view {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(black, 0.6);
  z-index: 10;
}
.modal-wrapper {
  width: 500px;
  // min-height: 300px;
  background-color: var(--bg);
  padding: 15px 15px 10px 15px;
}
.modal-text {
  margin-bottom: 15px;
  .name {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .info {
    color: rgba(black, 0.6);
    margin-bottom: 15px;
  }
  .description {
    color: black;
  }
}
.modal-rooms {
  overflow-x: scroll;
  display: flex;
  padding-bottom: 15px;
  &__item {
    &.new-room {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--accent);
      span {
        font-size: 30px;
        line-height: 30px;
        font-weight: 700;
      }
    }
    border-radius: 15px;
    margin-right: 15px;
    min-width: 140px;
    height: 80px;
    border: 2px solid black;
  }
}
</style>
