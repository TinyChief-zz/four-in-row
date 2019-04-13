import { INFO_GAMES, INFO_SELECT_GAME, INFO_SELECTED_GAME, INFO_UNSELECT_GAME } from '../const'
import { Module } from 'vuex'
import { InfoState } from './types'
import { RootState } from '../types'
import { Game } from '@/types'

export const infoModule: Module<InfoState, RootState> = {
  state: {
    gamesInfo: [
      {
        id: 1,
        name: 'Четыре в ряд',
        info: '10 человек в игре, 3 человека ожидают',
        description: 'Собери 4 фишки в ряд быстрее оппонента, чтобы выиграть.',
        inDevelopment: false
      },
      {
        id: 2,
        name: 'Быки и коровы',
        info: '10 человек в игре, 3 человека ожидают',
        description:
          'Постарайся первым отгадать трехзначное число с помощью специфичных подсказок.',
        inDevelopment: true
      },
      {
        id: 3,
        name: 'Пинбол',
        info: '10 человек в игре, 3 человека ожидают',
        description:
          'Защищай свои ворота и постарайся забить мяч в ворота оппонента.',
        inDevelopment: true
      },
      {
        id: 4,
        name: 'Тетрис',
        info: '10 человек в игре, 3 человека ожидают',
        description: 'Покажи свои способности в складировании блоков.',
        inDevelopment: true
      }
    ],
    selectedGame: {
      id: 1,
      name: 'Четыре в ряд',
      info: '10 человек в игре, 3 человека ожидают',
      description: 'Собери 4 фишки в ряд быстрее оппонента, чтобы выиграть.',
      inDevelopment: false
    }
  },
  getters: {
    [INFO_GAMES] (state): Game[] {
      return state.gamesInfo
    },
    [INFO_SELECTED_GAME] (state): Game | null {
      return state.selectedGame
    }
  },
  actions: {
    [INFO_SELECT_GAME] ({ state }, payload: number): void {
      state.selectedGame = state.gamesInfo.find(el => el.id === payload) || null
    },
    [INFO_UNSELECT_GAME] ({ state }): void {
      state.selectedGame = null
    }
  },
  mutations: {

  }
}
