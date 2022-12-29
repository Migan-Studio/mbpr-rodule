import { Client, type ClientOptions } from 'discord.js'
import { MbprCommandHandler, Loger } from '../module'
import { type MbprOptions } from '../types'

export class Mbpr extends Client {
  mbprOptions: MbprOptions
  public constructor(ClientOptions: ClientOptions, mbprOptions: MbprOptions) {
    super(ClientOptions)
    this.mbprOptions = mbprOptions
  }

  public loger = new Loger(this)

  public commandHandler = new MbprCommandHandler(this)

  public start() {
    this.login(this.mbprOptions.token)
    this.commandHandler.loadAll()
    this.loger.on()
  }
}
