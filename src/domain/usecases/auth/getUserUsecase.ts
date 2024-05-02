import { User } from "../../entities/user"

export interface GetUserUsecase {
  perform(params: GetUserUsecase.Params): Promise<GetUserUsecase.Response>
}

export namespace GetUserUsecase {
  export type Params = { 
    uid?: string
    token: string
  }

  export type Response = User | Error
}
