import { type Mbpr } from '../../Client'
import chalk from 'chalk'
import { MbprError } from '../../error'

export class Loger {
  mbpr: Mbpr
  public constructor(mbpr: Mbpr) {
    this.mbpr = mbpr
  }

  public on() {
    this.mbpr.once('ready', () => {
      this.sendConsoleMessage(
        `Bot name: ${chalk.cyan(this.mbpr.user!.username)}`
      )
    })
  }

  public sendConsoleMessage(content: string) {
    console.log(
      // `${white}[${green}${new Date().toISOString()}${white}] ${reset}[Mbpr] ${content}${reset}`
      `[${chalk.green(new Date().toISOString())}] [Mbpr] ${content}`
    )
  }

  public sendErrorMessage(content: string) {
    return new MbprError(`${content}`)
  }
}
