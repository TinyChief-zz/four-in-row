import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { infoModule } from './infoModule'
import { scoreModule } from './scoreModule'
import { MODAL_IS_SELECTING } from './const/'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0', // a simple property
    modalIsSelecting: false
  },
  getters: {
    [MODAL_IS_SELECTING]: (state) => state.modalIsSelecting
  },
  modules: {
    info: infoModule,
    score: scoreModule
  }
}

export default new Vuex.Store<RootState>(store)
