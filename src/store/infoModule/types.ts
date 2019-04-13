import { Game } from '@/types'

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface InfoState {
  gamesInfo: Game[];
  selectedGame: Game | null
}
