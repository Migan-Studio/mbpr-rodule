import { Command } from 'mbpr-rodule'
import { ChatInputCommandInteraction } from 'discord.js'

export default class extends Command {
  constructor() {
    super({
      name: 'a',
      description: 'a',
    })
  }
  execute(interaction: ChatInputCommandInteraction) {
    interaction.reply('a')
  }
}
