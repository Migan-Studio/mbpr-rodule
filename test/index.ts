import { GatewayIntentBits } from 'discord.js'
import { join } from 'path'
import { Mbpr } from '..'
const { token } = require('./config.json')

const client = new Mbpr(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    token,
    directory: {
      command: join(__dirname, 'Commands'),
    },
    defaultHelpCommand: true,
  }
)

client.start()
