import {
  ChatInputCommandInteraction,
  CacheType,
  Locale,
  codeBlock,
} from 'discord.js'
import { Command } from '.'

export default class extends Command {
  public constructor() {
    super()
    this.name = 'help'
    this.nameLocalizations = { ko: '도움말' }
    this.description = "mbpr project's help"
    this.descriptionLocalizations = { ko: 'mbpr 프로젝트의 도움말' }
  }
  execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    let a
    interaction.client.commandHandler.modules.forEach(command => {})
    if (interaction.locale === Locale.Korean)
      interaction.reply({
        embeds: [
          {
            title: `${interaction.client.user!.username}의 도움말`,
            description: `${codeBlock('md')}`,
          },
        ],
      })
  }
}
