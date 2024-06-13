import { useMutation } from '@tanstack/react-query'
import { GetPlanService } from '@/services/plan/getPlanService'
import { GetPlanUseCase } from '@/domain/usecases/plans/getPlanUsecase'

type GetPlanProps = GetPlanUseCase.Params
export async function getPlan({ plan_type, plan_duration, block_chain }: GetPlanProps) {

    const response = await GetPlanService.instance.perform({
        plan_type,
        plan_duration,
        block_chain
    })
    return response
}

export function useGetPlan() {
    return useMutation({
        mutationKey: ['get-plan'],
        mutationFn: async ({ plan_type, plan_duration, block_chain }: GetPlanProps) => await getPlan({ plan_type, plan_duration, block_chain }),
    })
}