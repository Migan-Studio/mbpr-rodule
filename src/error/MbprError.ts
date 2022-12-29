export class MbprError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'MbprError'
  }
}
