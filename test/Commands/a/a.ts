import { ChatInputCommandInteraction, CacheType } from 'discord.js'
import { Command } from '../../..'

export default class test extends Command {
  constructor() {
    super()
    this.name = 'a'
    this.description = 'a'
  }
  execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    interaction.reply('a')
  }
}
