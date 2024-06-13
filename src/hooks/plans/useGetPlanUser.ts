import { GetPlanUserUseCase } from '@/domain/usecases/plans/getPlanUserUsecase'
import { GetPlanUserService } from '@/services/plan/getPlanUserService'
import { useMutation } from '@tanstack/react-query'


type GetPlanUserProps = GetPlanUserUseCase.Params
export async function getPlanUser({ user_id }: GetPlanUserProps) {

    const response = await GetPlanUserService.instance.perform({
        user_id
    })
    return response
}

export function useGetPlanUser() {
    return useMutation({
        mutationKey: ['get-plan-user'],
        mutationFn: async ({ user_id }: GetPlanUserProps) => await getPlanUser({ user_id }),
    })
}