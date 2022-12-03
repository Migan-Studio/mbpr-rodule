import { type Mbpr } from '../../Client'
import { green, white, blue } from '.'

export class Loger {
  mbpr: Mbpr
  public constructor(mbpr: Mbpr) {
    this.mbpr = mbpr
  }

  public on() {
    this.mbpr.once('ready', () => {
      console.log(
        `${white}[${green}${new Date().toISOString()}${white}] Bot name: ${blue}${
          this.mbpr.user!.username
        }${white}`
      )
    })
  }
}
