import { type ClientOptions } from 'discord.js'
import { Loger } from '../module'
import { type MbprOptions } from '../types'
import { DiscommandClient } from 'discommand'
import HelpCommand from '../module/Command'

export class Mbpr extends DiscommandClient {
  mbprOptions: MbprOptions
  public constructor(ClientOptions: ClientOptions, mbprOptions: MbprOptions) {
    super(ClientOptions, {
      directory: {
        command: mbprOptions.directory.command,
        listener: mbprOptions.directory.listener,
      },
    })
    this.mbprOptions = mbprOptions
    if (mbprOptions.defaultHelpCommand)
      this.commandHandler.load([new HelpCommand()])
  }

  public loger = new Loger(this)

  public start() {
    this.login(this.mbprOptions.token)
    this.loger.on()
    this.loadAll()
  }
}
