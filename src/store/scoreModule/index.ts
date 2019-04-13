import { Module } from 'vuex'
import { ScoreState } from './types'
import { RootState } from '../types'
import { SCORE_CURRENT, SCORE_OVERALL, CHANGE_SCORE } from '../const'

export const scoreModule: Module<ScoreState, RootState> = {
  state: {
    currentScore: {
      p1: {
        score: 0
      },
      p2: {
        score: 0
      }
    },
    overallScore: [0, 0]
  },
  getters: {
    [SCORE_CURRENT]: (state) => state.currentScore,
    [SCORE_OVERALL]: (state) => state.overallScore
  },
  actions: {
    [CHANGE_SCORE]: ({ state }, payload: {winner: 'p1' | 'p2'}) => {
      console.log(payload)
      state.currentScore = {
        ...state.currentScore,
        [payload.winner]: {
          score: +state.currentScore[payload.winner].score + 1
        }
      }
    }
  },
  mutations: {

  }
}
