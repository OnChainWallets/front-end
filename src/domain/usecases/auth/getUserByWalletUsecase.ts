import { User } from "../../entities/user"

export interface GetUserByWalletUsecase {
    perform(params: GetUserByWalletUsecase.Params): Promise<GetUserByWalletUsecase.Response>
}

export namespace GetUserByWalletUsecase {
    export type Params = {
        user_wallet: string
    }

    export type Response = User | Error
}
