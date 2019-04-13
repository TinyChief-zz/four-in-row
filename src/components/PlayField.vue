<template>
  <div class="game">
    <div class="game-field">
      <router-view @changeScore="handleChangeScore($event)"/>
    </div>
    <game-side />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GameSide from '@/components/GameSide.vue'
import { CHANGE_SCORE } from '../store/const'

@Component({
  components: {
    'game-side': GameSide
  }
})
export default class PlayField extends Vue {
  handleChangeScore (data: Object) {
    this.$store.dispatch(CHANGE_SCORE, data)
  }
}
</script>

<style lang="scss" scoped>
.game {
  display: flex;
}
.game-field {
  flex: 1;
  margin-right: 30px;
}
</style>
