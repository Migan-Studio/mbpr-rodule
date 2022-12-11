import { Client, type ClientOptions } from 'discord.js'
import { MbprCommandHandler } from '..'
import { type MbprOptions } from '..'
import { Loger } from '../module'

export class Mbpr extends Client {
  MbprOptions: MbprOptions
  public constructor(ClientOptions: ClientOptions, MbprOptions: MbprOptions) {
    super(ClientOptions)
    this.MbprOptions = MbprOptions
  }

  public loger = new Loger(this)

  public commandHandler = new MbprCommandHandler(this)

  public start() {
    this.login(this.MbprOptions.token)
    this.commandHandler.loadAll()
    this.loger.on()
  }
}
