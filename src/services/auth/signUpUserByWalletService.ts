import { SignUpUserByWalletUsecase } from '@/domain/usecases/auth/signUpUserByWalletUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'


export class SignUpUserByWalletService implements SignUpUserByWalletUsecase {
    public static instance = new SignUpUserByWalletService()


    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(
        params: SignUpUserByWalletUsecase.Params
    ): Promise<SignUpUserByWalletUsecase.Response> {
        const response = await this.requestHelper.make<SignUpUserByWalletUsecase.Response>({
            url: '/users/create_user_by_wallet',
            method: 'POST',
            data: params,
        })

        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}
