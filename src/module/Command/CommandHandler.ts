import { type Mbpr } from '../../Client'
import { Collection, InteractionType } from 'discord.js'
import { type Command } from './Command'
import { readdirSync } from 'fs'
import { red, white } from '../Loger'

export class MbprCommandHandler {
  mbpr: Mbpr
  public constructor(mbpr: Mbpr) {
    this.mbpr = mbpr
  }
  public modules: Collection<string, Command> = new Collection()

  private register(module: Command) {
    if (!module.name)
      throw this.mbpr.loger.sendErrorMessage(
        `Command name is ${red}undefined.${white}`
      )
    this.modules.set(module.name, module)
    this.mbpr.once('ready', () => {
      this.mbpr
        .application!.commands.create({
          name: module.name,
          nameLocalizations: module.nameLocalizations,
          description: module.description,
          descriptionLocalizations: module.descriptionLocalizations,
          // @ts-ignore
          type: module.type!,
          options: module.options!,
          defaultPermission: module.defaultPermission!,
        })
        .then(() => {
          this.mbpr.loger.sendConsoleMessage(
            `Command ${module.name} has been loaded.`
          )
        })
    })
  }

  public loadAll() {
    const DIR = this.mbpr.MbprOptions.commandFolderLoadDir
    const commandDirectory = readdirSync(DIR)

    for (const folder of commandDirectory) {
      const folderDirectory = readdirSync(`${DIR}/${folder}`)
      for (const file of folderDirectory) {
        const module = require(`${DIR}/${folder}/${file}`)

        if (!module.default) {
          this.register(new module())
        } else {
          this.register(new module.default())
        }
      }
    }

    if (this.mbpr.MbprOptions.defaultHelpCommand) {
      const helpCommands = require('./help')
      const command = new helpCommands()
      this.register(command)
    } else this.mbpr.loger.sendConsoleMessage('Default help command is off.')

    this.mbpr.on('interactionCreate', async interaction => {
      if (interaction.type === InteractionType.ApplicationCommand) {
        if (!interaction.isChatInputCommand()) return

        const command = this.modules.get(interaction.commandName)

        if (!command) return

        try {
          await command.execute(interaction)
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}
