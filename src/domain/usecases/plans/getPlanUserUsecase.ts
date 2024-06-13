import { PlanUser } from "../../entities/plan-user"

export interface GetPlanUserUseCase {
    perform(params: GetPlanUserUseCase.Params): Promise<GetPlanUserUseCase.Response>
}

export namespace GetPlanUserUseCase {
    export type Params = {
        user_id: string
    }

    export type Response = PlanUser[] | Error
}
