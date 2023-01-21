import type { Logger } from '@migan-studio/logger'
import type { directory } from 'discommand'

export interface MbprOptions {
  directory: directory
  defaultHelpCommand?: boolean
  token: string
}

declare module 'discord.js' {
  interface Client {
    readonly logger: Logger
    readonly mbprOptions: MbprOptions
    start(): void
  }
}
