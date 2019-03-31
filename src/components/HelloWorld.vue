<template>
  <div>
    <h1 class="title">Добро пожаловать в игру «Четыре в ряд».</h1>
    <div class="tables">
      <div class="table"
        v-for="(item, i) in tablesData"
        v-bind:key="i"
        @click="$router.push('/game/a7d')"
      >
        <div class="window">

        </div>
        <div class="table-name">
          Рябчик
        </div>
      </div>
      <div class="table"
        @click="$router.push('/game/c2l')"
      >
        <div class="window">

        </div>
        <div class="table-name">
          Синица
        </div>
      </div>
      <div class="table"
        @click="$router.push('/game/w5m')"
      >
        <div class="window">

        </div>
        <div class="table-name">
          Ласточка
        </div>
      </div>
      <div class="table"
        @click="$router.push('/game/z9k')"
      >
        <div class="window">

        </div>
        <div class="table-name">
          Страус
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
      msg: 'Welcome to Your Vue.js App',
      tablesData: [
        {
          name: 'Рябчик',
          id: 'a7d'
        },
        {
          name: 'Синица',
          id: 'e6g'
        },
        {
          name: 'Ласточка',
          id: 'c8z'
        },
        {
          name: 'Страус',
          id: 'w5m'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-family: 'Oswald';
  font-size: 36px;
  margin-bottom: 50px;
  margin-top: 50px;
}
.tables {
  display: flex;
  justify-content: center;
}
.window {
  width: 150px;
  height: 100px;
  margin: 0 20px;
  border-radius: 20px;
  border: 3px solid slateblue
}
.table-name {
  margin-top: 12px;
  text-transform: uppercase;
  font-weight: bold;
}
a {
  color: #42b983;
}
</style>
