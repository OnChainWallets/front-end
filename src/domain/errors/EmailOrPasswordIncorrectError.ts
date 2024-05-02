export class EmailOrPasswordIncorrectError extends Error {
    constructor() {
      super('Email or password entered are incorrect! Try again.')
      this.name = 'emailOrPasswordIncorrectError'
    }
  }
  