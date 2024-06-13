import { CreateUserPlanUseCase } from '@/domain/usecases/plans/createUserPlanUsecase'
import { CreateUserPlanService } from '@/services/plan/createUserPlanService'
import { useMutation } from '@tanstack/react-query'

type CreateUserPlanProps = CreateUserPlanUseCase.Params

export async function createUserPlan({ payment_type, plan_block_chain, plan_duration, plan_price, plan_type, user_id }: CreateUserPlanProps) {

    const response = await CreateUserPlanService.instance.perform({
        payment_type,
        plan_block_chain,
        plan_duration,
        plan_price,
        plan_type,
        user_id
    })
    if (response instanceof Error) throw response

    return response

}

export function useCreateUserPlan() {
    return useMutation({
        mutationKey: ['create-user-plan'],
        mutationFn: async (props: CreateUserPlanProps) => createUserPlan(props),
    })
}