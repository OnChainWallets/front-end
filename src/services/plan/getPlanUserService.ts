
import { GetPlanUserUseCase } from '@/domain/usecases/plans/getPlanUserUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'

export class GetPlanUserService implements GetPlanUserUseCase {
    public static instance = new GetPlanUserService()

    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(params: GetPlanUserUseCase.Params): Promise<GetPlanUserUseCase.Response> {
        const response = await this.requestHelper.make<GetPlanUserUseCase.Response>({
            url: `/plans/plan_user/${params.user_id}`,
            method: 'GET'
        })
        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}