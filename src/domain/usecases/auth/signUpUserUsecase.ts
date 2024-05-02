import { User } from "../../entities/user"


export interface SignUpUserUsecase {
  perform(params: SignUpUserUsecase.Params): Promise<SignUpUserUsecase.Response>
}

export namespace SignUpUserUsecase {
  export type Params = {
    name: string 
    email: string
    password: string 
  }

  export type Response = User | Error
}
