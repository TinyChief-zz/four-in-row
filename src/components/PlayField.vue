<template>
<div class="game-wrapper">
  <div class="result" v-bind:class="{hasWinner: winner}">
    <h1>Победил: {{ winner === 'p1' ? firstPlayerName : secondPlayerName }}</h1>
    <div class="buttons">
      <button
        class="result-button btn-again"
        @click="playAgain()"
      >Играть ещё
      </button>
      <button
        class="result-button btn-quit"
        @click="$router.push('/')"
      >На главную</button>
    </div>
  </div>
  <div class="white-screen" v-if="winner"></div>
  <div
    class="play-field"
    :style="styleObject"
  >
    <div
      v-for="i in totalColumns * totalRows"
      :key="i"
      class="field"
      @click="handleClick(i)"
    >
      <div class="circle">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      styleObject: {
        gridTemplateColumns: null
      },
      msg: 'Welcome to Your Vue.js App',
      totalColumns: 6,
      totalRows: 6,
      fieldData: [],
      domFields: null,
      turn: 'p1',
      winner: null,
      firstPlayerName: 'player1',
      secondPlayerName: 'player2',
      score: [0, 0]
    }
  },
  methods: {
    handleClick (target) {
      let columnClicked = target % this.totalColumns
      columnClicked = columnClicked === 0 ? this.totalColumns : columnClicked
      let fl = true
      let i = 1
      let placement = null
      // GAME & PLACEMENT LOGIC
      while (fl) {
        placement = this.totalColumns * (this.totalRows - i) + columnClicked
        if (!this.fieldData[placement - 1][0]) {
          this.domFields[placement - 1].classList.add(this.turn)
          this.fieldData[placement - 1] = [true, this.turn]
          fl = false
          this.turn = this.turn === 'p1' ? 'p2' : 'p1'
        }
        i++
        if (i > this.totalRows) {
          fl = false
        }
      }
      // WIN LOGIC
      let inRow = 1
      let inColumn = 1
      let inSecondDiag = 1
      let inFirstDiag = 1
      const player = this.turn === 'p1' ? 'p2' : 'p1'
      const opponent = this.turn === 'p2' ? 'p2' : 'p1'
      const totalColumns = this.totalColumns
      let winFieldsRow = [placement - 1]
      let winFieldsColumn = [placement - 1]
      let winFieldsFirstDiag = [placement - 1]
      let winFieldsSecondDiag = [placement - 1]
      // const totalRows = this.totalRows
      const totalFields = totalColumns * totalColumns
      const fd = this.fieldData
      function checkRight () {
        // If placement field is last in a row
        if (placement % totalColumns === 0) {
          return
        }
        // Check first right
        if (fd[placement][1] === 'p' || fd[placement][1] === opponent) {
          return
        }
        if (fd[placement][1] === player) {
          winFieldsRow.push(placement)
          inRow += 1
        }
        // Check second right
        if (
          placement + 1 >= totalFields ||
          fd[placement + 1][1] === 'p' ||
          fd[placement + 1][1] === opponent
        ) {
          return
        }
        if (fd[placement + 1][1] === player && (placement + 1) % totalColumns !== 1) {
          winFieldsRow.push(placement + 1)
          inRow += 1
        }
        // Check third right
        if (placement + 2 >= totalFields) {
          return
        }
        if (fd[placement + 2][1] === player && (placement + 2) % totalColumns !== 1) {
          winFieldsRow.push(placement + 2)
          inRow += 1
        }
      }
      function checkLeft () {
        // If placement field is first in a row
        if (placement % totalColumns === 1) {
          return
        }
        // Check first left field
        if (
          placement - 2 < 0 ||
          fd[placement - 2][1] === 'p' ||
          fd[placement - 2][1] === opponent
        ) {
          return
        }
        if (fd[placement - 2][1] === player && (placement - 2) % totalColumns !== 0) {
          winFieldsRow.push(placement - 2)
          inRow += 1
        }
        // Check second left field
        if (
          placement - 3 < 0 ||
          fd[placement - 3][1] === 'p' ||
          fd[placement - 3][1] === opponent
        ) {
          return
        }
        if (
          fd[placement - 3][1] === player &&
          (placement - 3) % totalColumns !== totalColumns - 1
        ) {
          winFieldsRow.push(placement - 3)
          inRow += 1
        }
        // Check third left field
        if (placement - 4 < 0) {
          return
        }
        if (
          fd[placement - 4][1] === player &&
          (placement - 4) % totalColumns !== totalColumns - 2
        ) {
          winFieldsRow.push(placement - 4)
          inRow += 1
        }
      }
      function checkBottom () {
        if (
          placement + totalColumns < totalFields &&
          fd[placement - 1 + totalColumns][1] === player
        ) {
          winFieldsColumn.push(placement - 1 + totalColumns)
          inColumn += 1
        }
        if (
          placement + 2 * totalColumns < totalFields &&
          fd[placement - 1 + 2 * totalColumns][1] === player
        ) {
          winFieldsColumn.push(placement - 1 + 2 * totalColumns)
          inColumn += 1
        }
        if (
          placement + 3 * totalColumns < totalFields &&
          fd[placement - 1 + 3 * totalColumns][1] === player
        ) {
          winFieldsColumn.push(placement - 1 + 3 * totalColumns)
          inColumn += 1
        }
      }
      function checkTopRight () {
        if (placement % totalColumns === 0) {
          return
        }
        // Check next to top right
        if (
          placement <= totalColumns ||
          fd[placement - totalColumns][1] === 'p' ||
          fd[placement - totalColumns][1] === opponent
        ) {
          return
        }
        if (fd[placement - totalColumns][1] === player) {
          winFieldsColumn.push(placement - totalColumns)
          inSecondDiag += 1
        }
        // Check second next to top right
        if (
          placement <= 2 * totalColumns ||
          fd[placement - 2 * totalColumns + 1][1] === 'p' ||
          fd[placement - 2 * totalColumns + 1][1] === opponent
        ) {
          return
        }
        if (fd[placement - 2 * totalColumns + 1][1] === player) {
          winFieldsColumn.push(placement - 2 * totalColumns + 1)
          inSecondDiag += 1
        }
        if (placement <= 3 * totalColumns) {
          return
        }
        if (fd[placement - 3 * totalColumns + 2][1] === player) {
          winFieldsColumn.push(placement - 3 * totalColumns + 2)
          inSecondDiag += 1
        }
      }
      function checkBottomLeft () {
        if (placement % totalColumns === 1) {
          return
        }
        // Check next to bottom left
        if (
          placement > totalFields - totalColumns ||
          fd[placement + totalColumns - 2][1] === 'p' ||
          fd[placement + totalColumns - 2][1] === opponent
        ) {
          return
        }
        if (fd[placement + totalColumns - 2][1] === player) {
          winFieldsSecondDiag.push(placement + totalColumns - 2)
          inSecondDiag += 1
        }
        // Check second next to bottom left
        if (
          placement > totalFields - 2 * totalColumns ||
          fd[placement + 2 * totalColumns - 3][1] === 'p' ||
          fd[placement + 2 * totalColumns - 3][1] === opponent
        ) {
          return
        }
        if (fd[placement + 2 * totalColumns - 3][1] === player) {
          winFieldsSecondDiag.push(placement + 2 * totalColumns - 3)
          inSecondDiag += 1
        }
        // Check third next  to bottom left
        if (
          placement > totalFields - 3 * totalColumns ||
          fd[placement + 3 * totalColumns - 4][1] === 'p' ||
          fd[placement + 3 * totalColumns - 4][1] === opponent
        ) {
          return
        }
        if (fd[placement + 3 * totalColumns - 4][1] === player) {
          winFieldsSecondDiag.push(placement + 3 * totalColumns - 4)
          inSecondDiag += 1
        }
      }
      function checkTopLeft () {
        if (placement % totalColumns === 1) {
          return
        }
        // Check next to top left
        if (
          placement <= totalColumns ||
          fd[placement - totalColumns - 2][1] === 'p' ||
          fd[placement - totalColumns - 2][1] === opponent
        ) {
          return
        }
        if (fd[placement - totalColumns - 2][1] === player) {
          winFieldsFirstDiag.push(placement - totalColumns - 2)
          inFirstDiag += 1
        }
        // Check second next to top left
        if (
          placement <= 2 * totalColumns ||
          fd[placement - 2 * totalColumns - 3][1] === 'p' ||
          fd[placement - 2 * totalColumns - 3][1] === opponent
        ) {
          return
        }
        if (fd[placement - 2 * totalColumns - 3][1] === player) {
          winFieldsFirstDiag.push(placement - 2 * totalColumns - 3)
          inFirstDiag += 1
        }
        // Check third next to top left
        if (placement <= 3 * totalColumns) {
          return
        }
        if (fd[placement - 3 * totalColumns - 4][1] === player) {
          winFieldsFirstDiag.push(placement - 3 * totalColumns - 4)
          inFirstDiag += 1
        }
      }
      function checkBottomRight () {
        if (placement % totalColumns === 0) {
          return
        }
        // Check next to bottom left
        if (
          placement > totalFields - totalColumns ||
          fd[placement + totalColumns][1] === 'p' ||
          fd[placement + totalColumns][1] === opponent
        ) {
          return
        }
        if (fd[placement + totalColumns][1] === player) {
          winFieldsFirstDiag.push(placement + totalColumns)
          inFirstDiag += 1
        }
        // Check second next to bottom left
        if (
          placement > totalFields - 2 * totalColumns ||
          fd[placement + 2 * totalColumns + 1][1] === 'p' ||
          fd[placement + 2 * totalColumns + 1][1] === opponent
        ) {
          return
        }
        if (fd[placement + 2 * totalColumns + 1][1] === player) {
          winFieldsFirstDiag.push(placement + 2 * totalColumns + 1)
          inFirstDiag += 1
        }
        // Check third next  to bottom left
        if (
          placement > totalFields - 3 * totalColumns ||
          fd[placement + 3 * totalColumns + 2][1] === 'p' ||
          fd[placement + 3 * totalColumns + 2][1] === opponent
        ) {
          return
        }
        if (fd[placement + 3 * totalColumns + 2][1] === player) {
          winFieldsFirstDiag.push(placement + 3 * totalColumns + 2)
          inFirstDiag += 1
        }
      }
      // Horizontal
      checkRight()
      checkLeft()
      // Vertical
      checkBottom()
      // FirstDiagonal
      checkTopLeft()
      checkBottomRight()
      // SecondDiagonal
      checkTopRight()
      checkBottomLeft()
      if (inRow >= 4 || inColumn >= 4 || inFirstDiag >= 4 || inSecondDiag >= 4) {
        // Set the winner
        this.winner = player
        // Highlight winning fields
        const fields = document.querySelectorAll('.field')
        // eslint-disable-next-line
        const a = [winFieldsRow, winFieldsColumn, winFieldsFirstDiag, winFieldsSecondDiag]
          .filter(el => {
            return el.length >= 4
          })[0]
          .forEach(val => {
            fields[val].classList.add('win-field')
          })
        // Refresh score
        this.score[this.winner[1] - 1] += 1
      }
      // console.log(`In a row: ${inRow}\nIn a column: ${inColumn}`)
      // console.log(`In a first diagonal: ${inFirstDiag}\nIn a second diagonal: ${inSecondDiag}`)
    },
    playAgain () {
      this.winner = null
      this.domFields.forEach(el => {
        el.classList = ['field']
      })
      for (let i = 0; i < this.totalColumns * this.totalRows; i++) {
        this.fieldData[i] = [false, 'p']
      }
      this.turn = 'p1'
    }
  },
  beforeMount () {
    for (let i = 0; i < this.totalColumns * this.totalRows; i++) {
      this.fieldData[i] = [false, 'p']
    }
    this.$nextTick(() => {
      this.styleObject.gridTemplateColumns = `repeat(${this.totalColumns},auto)`
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.domFields = document.querySelectorAll('.field')
    })
  }
}
</script>

<style scoped>
.game-wrapper {
  position: relative;
  overflow: hidden;
}
.play-field {
  padding: 20px 0;
  min-height: 500px;
  border: 1px solid sienna;
  background-color: rgb(243, 219, 187);
  border-radius: 30px;
  position: relative;
  display: grid;
  grid-column-gap: 10px;
}
.white-screen {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.3);
}
.result {
  /* display: none; */
  z-index: 101;
  font-size: 20px;
  font-weight: bold;
  width: 70%;
  left: 50%;
  color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transform: translate(-50%, -100%);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  transition: all 0.3s ease-in-out;
}
.result h1 {
  margin-bottom: 20px;
}
.hasWinner {
  display: block;
  transform: translate(-50%, 0);
}
.buttons {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.result-button {
  padding: 7px 10px;
  font-size: 14px;
  color: white;
  border-radius: 7px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s all ease-in-out;
}
.btn-again:hover {
  background-color: rgba(107, 255, 49, 0.3);
}
.btn-quit:hover {
  background-color: rgba(255, 46, 46, 0.3);
}
.btn-again {
  border: 1px solid rgb(107, 255, 49);
}
.btn-quit {
  border: 1px solid rgb(255, 46, 46);
}
.field {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
.win-field .circle {
  border: 4px solid rgb(255, 252, 73);
}
.circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fff;
}
.p1 .circle {
  background-color: springgreen;
}
.p2 .circle {
  background-color: slateblue;
}
</style>
