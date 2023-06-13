import type { ClientOptions } from 'discord.js'
import { Logger } from '@migan-studio/logger'
import type { MbprOptions } from '../types/index.js'
import { DiscommandClient } from 'discommand'
import HelpCommand from '../module/Command/index.js'
import chalk from 'chalk'

export class Mbpr extends DiscommandClient {
  public readonly logger = new Logger({
    name: 'Mbpr',
  })
  public constructor(
    clientOptions: ClientOptions,
    public readonly mbprOptions: MbprOptions
  ) {
    super(clientOptions, {
      ...mbprOptions,
    })

    if (mbprOptions.defaultHelpCommand)
      this.commandHandler.load([new HelpCommand()])
  }

  public override start(): void {
    this.login(this.mbprOptions.token)

    this.once('ready', () => {
      this.logger.log(`Bot name: ${chalk.cyan(this.user!.username)}`)
    })
  }
}
