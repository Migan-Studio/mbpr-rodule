import {
  ChatInputCommandInteraction,
  CacheType,
  Locale,
  codeBlock,
} from 'discord.js'
import { Command } from 'discommand'

export default class extends Command {
  public constructor() {
    super('help')
    this.data = {
      name: 'help',
      nameLocalizations: { ko: '도움말' },
      description: "mbpr project's help",
      descriptionLocalizations: { ko: 'mbpr 프로젝트의 도움말' },
    }
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
