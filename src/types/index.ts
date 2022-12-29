import { MbprCommandHandler } from '../module'
import { Loger } from '../module'

export interface MbprOptions {
  commandFolderLoadDir: string
  defaultHelpCommand: boolean
  token: string
}

declare module 'discord.js' {
  interface Client {
    loger: Loger
    commandHandler: MbprCommandHandler
    mbprOptions: MbprOptions
    start(): void
  }
}
