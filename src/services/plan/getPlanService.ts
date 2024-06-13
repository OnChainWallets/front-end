
import { GetPlanUseCase } from '@/domain/usecases/plans/getPlanUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'

export class GetPlanService implements GetPlanUseCase {
    public static instance = new GetPlanService()

    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(params: GetPlanUseCase.Params): Promise<GetPlanUseCase.Response> {
        const response = await this.requestHelper.make<GetPlanUseCase.Response>({
            url: `/plans/${params.plan_type}/${params.block_chain}/${params.plan_duration}`,
            method: 'GET'
        })
        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}