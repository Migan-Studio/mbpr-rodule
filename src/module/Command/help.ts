import {
  ChatInputCommandInteraction,
  CacheType,
  Locale,
  codeBlock,
} from 'discord.js'
import { Command } from '.'

export = class extends Command {
  public constructor() {
    super()
    this.name = 'help'
    this.nameLocalizations = { ko: '도움말' }
    this.description = "mbpr project's help"
    this.descriptionLocalizations = { ko: 'mbpr 프로젝트의 도움말' }
  }
  execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    const command = interaction.client.commandHandler.modules
      .map(command => `- ${command.name}`)
      .join('\n')

    interaction.reply({
      content: codeBlock('md', `${command}`),
    })
  }
}
