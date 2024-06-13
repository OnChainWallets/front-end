
import { UpdateUserPlanUseCase } from '@/domain/usecases/plans/updateUserPlanUseCase'
import { UpdateUserPlanService } from '@/services/plan/updateUserPlanService'
import { useMutation } from '@tanstack/react-query'

type UpdateUserPlanProps = UpdateUserPlanUseCase.Params

export async function updateUserPlan({ payment_type, plan_block_chain, plan_duration, plan_price, plan_type, user_id, current_plan_id }: UpdateUserPlanProps) {

    const response = await UpdateUserPlanService.instance.perform({
        payment_type,
        plan_block_chain,
        plan_duration,
        plan_price,
        plan_type,
        user_id,
        current_plan_id
    })
    if (response instanceof Error) throw response

    return response

}

export function useUpdateUserPlan() {
    return useMutation({
        mutationKey: ['update-user-plan'],
        mutationFn: async (props: UpdateUserPlanProps) => updateUserPlan(props),
    })
}