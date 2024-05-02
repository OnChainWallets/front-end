import { User } from "@/src/domain/entities/user"

export interface SignInUserUsecase {
  perform(params: SignInUserUsecase.Params): Promise<SignInUserUsecase.Response>
}

export namespace SignInUserUsecase {
  export type Params = { 
    email: string
    password: string
  }

  export type Response = {
    token: string
    user: User
  } | Error
}
