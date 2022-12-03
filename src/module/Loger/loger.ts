import { type Mbpr } from '../../Client'
import { green, white, blue, red } from '.'

export class Loger {
  mbpr: Mbpr
  public constructor(mbpr: Mbpr) {
    this.mbpr = mbpr
  }

  public on() {
    this.mbpr.once('ready', () => {
      console.log(
        `${white}[${green}${new Date().toISOString()}${white}] [Mbpr] Bot name: ${blue}${
          this.mbpr.user!.username
        }${white}`
      )
    })
  }

  public sendConsoleMessage(content: string) {
    console.log(
      `${white}[${green}${new Date().toISOString()}${white}] [Mbpr] ${content}`
    )
  }

  public sendErrorMessage(content: string) {
    return new Error(
      `${white}[${green}${new Date().toISOString()}${white}] [Mbpr] ${content}`
    )
  }
}
