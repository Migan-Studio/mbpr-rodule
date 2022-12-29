import { GatewayIntentBits } from 'discord.js'
import path from 'path'
import { Mbpr } from '..'
const { token } = require('./config.json')

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

client.start()
