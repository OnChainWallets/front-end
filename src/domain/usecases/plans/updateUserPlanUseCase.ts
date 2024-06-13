
export interface UpdateUserPlanUseCase {
    perform(params: UpdateUserPlanUseCase.Params): Promise<UpdateUserPlanUseCase.Response>
}

export namespace UpdateUserPlanUseCase {
    export type Params = {
        user_id: string
        current_plan_id: string

        plan_type: string
        plan_duration: string
        plan_block_chain: string
        plan_price: number
        payment_type: string
    }

    export type Response = number | Error
}
