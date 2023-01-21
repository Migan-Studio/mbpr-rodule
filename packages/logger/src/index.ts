import type { LoggerOptions } from './types'
import chalk from 'chalk'

class NamedError extends Error {
  constructor(name: string, message?: string) {
    super(message)
    this.name = `${name}Error`
  }
}

export class Logger {
  public constructor(public readonly options: LoggerOptions) {
    if (typeof options.name !== 'string')
      throw new TypeError(`'name' type is not string.`)
  }

  public log(message?: any, ...optionalParams: any[]) {
    console.log(
      `[${chalk.green(new Date().toISOString())}] [${
        this.options.name
      }] ${message}`,
      ...optionalParams
    )
  }

  public error(message?: string) {
    throw new NamedError(this.options.name, message)
  }
}

export { LoggerOptions }
