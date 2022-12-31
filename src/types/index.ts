import { type Loger } from '../module'
import { type directory } from 'discommand'

export interface MbprOptions {
  directory: directory
  defaultHelpCommand: boolean
  token: string
}

declare module 'discord.js' {
  interface Client {
    loger: Loger
    mbprOptions: MbprOptions
    start(): void
  }
}
