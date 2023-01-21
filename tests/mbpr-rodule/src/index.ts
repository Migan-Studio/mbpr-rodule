import { Mbpr } from 'mbpr-rodule'
import { GatewayIntentBits } from 'discord.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

new Mbpr(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    token: process.env.TOKEN!,
    directory: {
      command: join(dirname(fileURLToPath(import.meta.url)), 'commands'),
    },
    defaultHelpCommand: true,
  }
).start()
