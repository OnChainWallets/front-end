export interface SignUpUserUsecase {
  perform(params: SignUpUserUsecase.Params): Promise<SignUpUserUsecase.Response>
}

export namespace SignUpUserUsecase {
  export type Params = {
    username: string
    email: string
    pswrd: string
  }

  export type Response = number | Error
}
