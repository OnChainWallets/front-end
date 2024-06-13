
export interface CreateUserPlanUseCase {
    perform(params: CreateUserPlanUseCase.Params): Promise<CreateUserPlanUseCase.Response>
}

export namespace CreateUserPlanUseCase {
    export type Params = {
        user_id: string
        plan_type: string
        plan_block_chain: string
        plan_duration: string
        plan_price: number
        payment_type: string
    }

    export type Response = number | Error
}
