export interface SignUpUserByWalletUsecase {
    perform(params: SignUpUserByWalletUsecase.Params): Promise<SignUpUserByWalletUsecase.Response>
}

export namespace SignUpUserByWalletUsecase {
    export type Params = {
        user_wallet: string
    }

    export type Response = number | Error
}
