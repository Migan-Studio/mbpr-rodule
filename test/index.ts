import { GatewayIntentBits } from 'discord.js'
import path from 'path'
import { Mbpr } from '../dist'
import { token } from './config.json'

const client = new Mbpr(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    token,
    commandFolderLoadDir: path.join(__dirname, 'Commands'),
    defaultHelpCommand: true,
  }
)
