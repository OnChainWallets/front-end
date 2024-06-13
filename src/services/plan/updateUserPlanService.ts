
import { UpdateUserPlanUseCase } from '@/domain/usecases/plans/updateUserPlanUseCase';
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'

export class UpdateUserPlanService implements UpdateUserPlanUseCase {
    public static instance = new UpdateUserPlanService()

    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(params: UpdateUserPlanUseCase.Params): Promise<UpdateUserPlanUseCase.Response> {

        const { user_id, current_plan_id, ...dataWithoutUserId } = params;

        const response = await this.requestHelper.make<UpdateUserPlanUseCase.Response>({
            url: `/plans/plan_user/${user_id}/${current_plan_id}`,
            method: 'PUT',
            data: dataWithoutUserId
        })
        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}