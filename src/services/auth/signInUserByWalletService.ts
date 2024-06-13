import { SignInUserByWalletUsecase } from '@/domain/usecases/auth/signInUserByWalletUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'


export class SignInUserByWalletService implements SignInUserByWalletUsecase {
    public static instance = new SignInUserByWalletService()


    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(
        params: SignInUserByWalletUsecase.Params
    ): Promise<SignInUserByWalletUsecase.Response> {
        const response = await this.requestHelper.make<SignInUserByWalletUsecase.Response>({
            url: '/users/authenticate_user_by_wallet',
            method: 'POST',
            data: params,
        })

        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}
