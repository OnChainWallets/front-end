import { CreateUserPlanUseCase } from '@/domain/usecases/plans/createUserPlanUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'

export class CreateUserPlanService implements CreateUserPlanUseCase {
    public static instance = new CreateUserPlanService()

    constructor(
        private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
    ) { }

    async perform(params: CreateUserPlanUseCase.Params): Promise<CreateUserPlanUseCase.Response> {

        const { user_id, ...dataWithoutUserId } = params;

        const response = await this.requestHelper.make<CreateUserPlanUseCase.Response>({
            url: `/plans/plan_user/${user_id}`,
            method: 'POST',
            data: dataWithoutUserId
        })
        if ('error' in response) {
            return response.error
        }

        return response.body
    }
}