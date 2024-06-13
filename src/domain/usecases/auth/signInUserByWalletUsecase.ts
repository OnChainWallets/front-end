export interface SignInUserByWalletUsecase {
    perform(params: SignInUserByWalletUsecase.Params): Promise<SignInUserByWalletUsecase.Response>
}

export namespace SignInUserByWalletUsecase {
    export type Params = {
        user_wallet: string
    }

    export type Response = {
        id: string,
        token: string
    }
        | Error
}
