import { GetUserByWalletUsecase } from '@/domain/usecases/auth/getUserByWalletUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'

export class GetUserByWalletService implements GetUserByWalletUsecase {
    public static instance = new GetUserByWalletService()

    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(params: GetUserByWalletUsecase.Params): Promise<GetUserByWalletUsecase.Response> {

        const response = await this.requestHelper.make<GetUserByWalletUsecase.Response>({
            url: `/users/get_user_by_wallet/${params.user_wallet}`,
            method: 'GET'
        })
        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}