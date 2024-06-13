import { Plan } from "../../entities/plan"

export interface GetPlanUseCase {
    perform(params: GetPlanUseCase.Params): Promise<GetPlanUseCase.Response>
}

export namespace GetPlanUseCase {
    export type Params = {
        plan_type: string
        block_chain: string
        plan_duration: number
    }

    export type Response = Plan | Error
}
