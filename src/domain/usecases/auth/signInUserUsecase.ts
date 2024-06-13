export interface SignInUserUsecase {
  perform(params: SignInUserUsecase.Params): Promise<SignInUserUsecase.Response>
}

export namespace SignInUserUsecase {
  export type Params = {
    username?: string
    email?: string
    pswrd: string
  }

  export type Response = {
    id: string,
    token: string
  }
    | Error
}
