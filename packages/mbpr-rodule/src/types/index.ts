import type { Logger } from '@migan-studio/logger'
import type { DiscommandClientOptions } from 'discommand'

export interface MbprOptions extends DiscommandClientOptions {
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
