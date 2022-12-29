import {
  ApplicationCommandOptionData,
  ApplicationCommandType,
  ChatInputCommandInteraction,
  PermissionResolvable,
  LocalizationMap,
} from 'discord.js'

export abstract class Command {
  name: string = ''
  nameLocalizations?: LocalizationMap
  description: string = ''
  descriptionLocalizations?: LocalizationMap
  type?: ApplicationCommandType = ApplicationCommandType.ChatInput
  options?: ApplicationCommandOptionData[]
  defaultPermission?: PermissionResolvable
  execute(interaction: ChatInputCommandInteraction) {}
}
