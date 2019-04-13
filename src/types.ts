export interface Game {
  readonly id: number
  readonly name: string
  readonly info: string
  readonly description: string
  readonly inDevelopment?: boolean
}
